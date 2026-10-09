import { API } from "./api";

/* =========================================================
   REVIEWS STORE
   - one shared request for Home + Reviews page
   - last result is saved in the browser, so repeat visitors
     see reviews instantly while fresh data loads in background
   - automatic retry (server cold start / slow network)
========================================================= */

const CACHE_KEY = "gcs_reviews_v2";
const ATTEMPTS = 3;
const TIMEOUT_MS = 20000;

let memoryCache = null;
let inflight = null;

export const readReviewsCache = () => {
  if (memoryCache) return memoryCache;

  try {
    const saved = JSON.parse(
      localStorage.getItem(CACHE_KEY) || "null"
    );

    if (Array.isArray(saved)) {
      memoryCache = saved;
    }
  } catch {
    /* storage blocked – ignore */
  }

  return memoryCache;
};

export const writeReviewsCache = (list) => {
  memoryCache = list;

  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(list));
  } catch {
    /* ignore */
  }
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const requestOnce = async () => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${API}/api/reviews`, {
      signal: controller.signal,
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to load reviews");
    }

    return Array.isArray(result.data) ? result.data : [];
  } finally {
    clearTimeout(timer);
  }
};

export const fetchReviews = () => {
  if (inflight) return inflight;

  inflight = (async () => {
    let lastError;

    for (let i = 0; i < ATTEMPTS; i += 1) {
      try {
        const list = await requestOnce();

        writeReviewsCache(list);

        return list;
      } catch (error) {
        lastError = error;

        if (i < ATTEMPTS - 1) {
          await wait(700 * (i + 1));
        }
      }
    }

    throw lastError;
  })().finally(() => {
    inflight = null;
  });

  return inflight;
};

// Called as soon as the app starts (before the page chunk is downloaded)
export const prefetchReviews = () => {
  fetchReviews().catch(() => {});
};
