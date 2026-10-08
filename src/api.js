const API_URL =
  import.meta.env.VITE_API_URL ||
  `${window.location.protocol}//${window.location.hostname}:5000`;

export const API = API_URL.replace(/\/$/, "");

// ==========================================
// REQUEST
// ==========================================

const request = async (
  method,
  path,
  body,
  options = {}
) => {
  const response = await fetch(
    `${API}/api${path}`,
    {
      method,

      headers: {
        ...(body !== undefined
          ? {
              "Content-Type":
                "application/json",
            }
          : {}),

        ...(options.headers || {}),
      },

      body:
        body !== undefined
          ? JSON.stringify(body)
          : undefined,
    }
  );

  let data = {};

  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    const error = new Error(
      data?.message ||
        data?.error ||
        `Request failed with status ${response.status}`
    );

    error.response = {
      status: response.status,
      data,
    };

    throw error;
  }

  return {
    data,
    status: response.status,
    ok: response.ok,
  };
};

// ==========================================
// API
// ==========================================

export const api = {
  get(path, options = {}) {
    return request(
      "GET",
      path,
      undefined,
      options
    );
  },

  post(path, body, options = {}) {
    return request(
      "POST",
      path,
      body,
      options
    );
  },

  delete(path, options = {}) {
    return request(
      "DELETE",
      path,
      undefined,
      options
    );
  },
};

// ==========================================
// AUTH
// ==========================================

export const auth = () => {
  const token =
    localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};