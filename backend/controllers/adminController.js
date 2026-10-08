const Admin = require("../models/Admin");
const Booking = require("../models/Booking");
const Contact = require("../models/Contact");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ==========================
// Admin Register
// ==========================

const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    const existingAdmin = await Admin.findOne({
      where: {
        email: email.trim(),
      },
    });

    if (existingAdmin) {
      return res.status(409).json({
        success: false,
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name: name.trim(),
      email: email.trim(),
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "Admin created successfully",
      data: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("❌ Create Admin Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Admin Login
// ==========================

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const admin = await Admin.findOne({
      where: {
        email: email.trim(),
      },
    });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    const passwordMatched = await bcrypt.compare(
      password,
      admin.password
    );

    if (!passwordMatched) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("❌ Admin Login Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Admin Dashboard
// ==========================

const dashboard = async (req, res) => {
  try {
    const totalBookings = await Booking.count();
    const totalContacts = await Contact.count();

    const recentBookings = await Booking.findAll({
      limit: 5,
      order: [["createdAt", "DESC"]],
    });

    const recentContacts = await Contact.findAll({
      limit: 5,
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({
      success: true,
      dashboard: {
        totalBookings,
        totalContacts,
        recentBookings,
        recentContacts,
      },
      admin: req.admin,
    });
  } catch (error) {
    console.error("❌ Dashboard Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Admin Bookings
// ==========================

const getAdminBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error("❌ Get Admin Bookings Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findByPk(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    await booking.destroy();

    return res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    console.error("❌ Delete Booking Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Admin Contacts
// ==========================

const getAdminContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll({
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.error("❌ Get Admin Contacts Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByPk(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    await contact.destroy();

    return res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    console.error("❌ Delete Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createAdmin,
  loginAdmin,
  dashboard,

  getAdminBookings,
  deleteBooking,

  getAdminContacts,
  deleteContact,
};