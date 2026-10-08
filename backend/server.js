const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");

// ==========================
// Import Models
// ==========================

require("./models/Contact");
require("./models/Booking");
require("./models/Admin");
require("./models/Review");

// ==========================
// Import Routes
// ==========================

const contactRoutes = require("./routes/contactRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes = require("./routes/adminRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

// ==========================
// Middleware
// ==========================

const allowedOrigins = (
  process.env.FRONTEND_URLS ||
  "http://localhost:5173,http://localhost:5174"
)
  .split(",")
  .map((url) => url.trim())
  .filter(Boolean);

const isLocalOrigin = (origin) => {
  if (!origin) return true;

  try {
    const url = new URL(origin);

    return (
      ["localhost", "127.0.0.1"].includes(url.hostname) ||
      /^192\.168\./.test(url.hostname) ||
      /^10\./.test(url.hostname)
    );
  } catch {
    return false;
  }
};

app.use(
  cors({
    origin(origin, callback) {
      if (
        !origin ||
        allowedOrigins.includes(origin) ||
        isLocalOrigin(origin)
      ) {
        return callback(null, true);
      }

      return callback(
        new Error("CORS: Origin not allowed")
      );
    },

    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));

// ==========================
// Database Connection
// ==========================

let dbReady = false;
let dbPromise = null;

const connectDatabase = async () => {
  if (dbReady) return;

  if (!dbPromise) {
    dbPromise = (async () => {
      await sequelize.authenticate();

      console.log("✅ Neon PostgreSQL Connected");

      await sequelize.sync();

      console.log("✅ PostgreSQL Database Tables Synced");

      dbReady = true;
    })().catch((error) => {
      dbPromise = null;
      throw error;
    });
  }

  await dbPromise;
};

// ==========================
// Database Middleware
// ==========================

app.use(async (req, res, next) => {
  try {
    await connectDatabase();
    next();
  } catch (error) {
    console.error("❌ DATABASE ERROR:", error);

    res.status(500).json({
      success: false,
      message: "PostgreSQL database connection failed",
      error: error.message,
    });
  }
});

// ==========================
// Home Route
// ==========================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚖 Gupta Cab Service Backend is running",
  });
});

// ==========================
// Health Check
// ==========================

app.get("/api/health", async (req, res) => {
  try {
    await connectDatabase();

    res.json({
      success: true,
      database: "connected",
      databaseType: "PostgreSQL",
      environment: process.env.NODE_ENV || "production",
    });
  } catch (error) {
    console.error(
      "❌ HEALTH CHECK DATABASE ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      database: "disconnected",
      databaseType: "PostgreSQL",
      message: error.message,
    });
  }
});

// ==========================
// API Routes
// ==========================

app.use("/api/contact", contactRoutes);

app.use("/api/booking", bookingRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/reviews", reviewRoutes);

// ==========================
// Global Error Handler
// ==========================

app.use((err, req, res, next) => {
  console.error("❌ SERVER ERROR:", err);

  res.status(500).json({
    success: false,
    message:
      err.message || "Internal Server Error",
  });
});

// ==========================
// Server
// ==========================

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `🚀 Backend running on port ${PORT}`
  );

  console.log(
    `🩺 Health check: /api/health`
  );
});

// ==========================
// Export App
// ==========================

module.exports = app;