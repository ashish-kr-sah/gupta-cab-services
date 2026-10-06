const express = require("express");
const router = express.Router();

const {
  createAdmin,
  loginAdmin,
  dashboard,
} = require("../controllers/adminController");

const authMiddleware = require("../middleware/authMiddleware");


// Test Route
router.get("/test", (req, res) => {
  res.send("Admin Route Working");
});


// Create Admin
router.post("/register", authMiddleware, createAdmin); // only a logged-in admin can add admins


// Login Admin
router.post("/login", loginAdmin);


// Protected Profile Route
router.get("/profile", authMiddleware, (req, res) => {

  res.json({

    success: true,

    message: "Admin Profile Access Granted",

    admin: req.admin,

  });

});


// Admin Dashboard
router.get("/dashboard", authMiddleware, dashboard);


module.exports = router;