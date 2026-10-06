const Booking = require("../models/Booking");

const {
  sendEmail,
  adminEmail,
} = require("../config/mail");

// ==========================
// Create Booking
// ==========================

const createBooking = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      pickup,
      destination,
      cabType,
      persons,
      message,
    } = req.body;

    if (
      !fullName ||
      !phone ||
      !email ||
      !pickup ||
      !destination ||
      !cabType ||
      !persons
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    const booking = await Booking.create({
      fullName,
      phone,
      email,
      pickup,
      destination,
      cabType,
      persons,
      message,
    });

    // ==========================
    // Admin Notification
    // ==========================

    const adminMail = await sendEmail({
      to: adminEmail,
      subject: "🚖 New Cab Booking Received",
      replyTo: email,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;line-height:1.6;">
          <h2>New Booking Details 🚖</h2>

          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Pickup:</strong> ${pickup}</p>
          <p><strong>Destination:</strong> ${destination}</p>
          <p><strong>Cab Type:</strong> ${cabType}</p>
          <p><strong>Persons:</strong> ${persons}</p>
          <p><strong>Message:</strong> ${message || "No message"}</p>

          <hr>

          <p>New booking received from Gupta Cab Service website.</p>
        </div>
      `,
    });

    if (adminMail.success) {
      console.log("✅ Admin booking mail sent");
    } else {
      console.error(
        "❌ Admin booking mail failed:",
        adminMail.error?.message
      );
    }

    // ==========================
    // Customer Confirmation
    // ==========================

    const customerMail = await sendEmail({
      to: email,
      subject: "🚖 Booking Received - Gupta Cab Service",
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;line-height:1.6;">
          <h2>Thank You For Booking With Gupta Cab Service 🚖</h2>

          <p>Dear <strong>${fullName}</strong>,</p>

          <p>Your cab booking has been successfully received.</p>

          <h3>Your Booking Details:</h3>

          <p><strong>Pickup Location:</strong> ${pickup}</p>
          <p><strong>Destination:</strong> ${destination}</p>
          <p><strong>Cab Type:</strong> ${cabType}</p>
          <p><strong>Persons:</strong> ${persons}</p>

          <h3>Next Step 🚖</h3>

          <p>
            Our driver/team will contact you within 20 minutes
            for further confirmation.
          </p>

          <p>Thank you for choosing Gupta Cab Service.</p>

          <br>

          <strong>Gupta Cab Service Team</strong>
        </div>
      `,
    });

    if (customerMail.success) {
      console.log("✅ Customer booking mail sent");
    } else {
      console.error(
        "❌ Customer booking mail failed:",
        customerMail.error?.message
      );
    }

    return res.status(201).json({
      success: true,
      message: "Booking submitted successfully",
      data: booking,
      email: {
        admin: adminMail.success,
        customer: customerMail.success,
      },
    });
  } catch (error) {
    console.error("❌ Booking Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// ==========================
// Get All Bookings
// ==========================

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error("❌ Get Bookings Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ==========================
// Delete Booking
// ==========================

const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    await Booking.destroy({
      where: { id },
    });

    return res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    console.error("❌ Delete Booking Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createBooking,
  getBookings,
  deleteBooking,
};
