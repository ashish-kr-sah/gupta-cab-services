const express = require("express");
const router = express.Router();


// Controller Import
const {
  createContact,
  getContacts,
  deleteContact
} = require("../controllers/contactController");


// Middleware
const authMiddleware = require("../middleware/authMiddleware");



// ==========================
// User Contact Submit
// ==========================
router.post("/", createContact);



// ==========================
// Admin - Get All Contacts
// ==========================
router.get("/", authMiddleware, getContacts);



// ==========================
// Admin - Delete Contact
// ==========================
router.delete("/:id", authMiddleware, deleteContact);



module.exports = router;