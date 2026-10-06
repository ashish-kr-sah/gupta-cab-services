const Contact = require("../models/Contact");

const {
  sendEmail,
  adminEmail,
} = require("../config/mail");

// ==========================
// Create Contact
// ==========================

const createContact = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      subject,
      message,
    } = req.body;

    if (!fullName || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const contact = await Contact.create({
      fullName,
      email,
      phone,
      subject,
      message,
    });

    // ==========================
    // Admin Notification
    // ==========================

    const adminMail = await sendEmail({
      to: adminEmail,
      subject: "📩 New Contact Request - Gupta Cab Service",
      replyTo: email,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;line-height:1.6;">
          <h2>📩 New Contact Request</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
          <hr>
          <p>This message was submitted from the Gupta Cab Service website.</p>
        </div>
      `,
    });

    if (adminMail.success) {
      console.log("✅ Admin contact mail sent");
    } else {
      console.error(
        "❌ Admin contact mail failed:",
        adminMail.error?.message
      );
    }

    // ==========================
    // Customer Confirmation
    // ==========================

    const customerMail = await sendEmail({
      to: email,
      subject: "Thank You for Contacting Gupta Cab Service 🚖",
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;line-height:1.6;">
          <h2>Thank You for Contacting Gupta Cab Service 🚖</h2>

          <p>Hello <strong>${fullName}</strong>,</p>

          <p>We have received your message successfully.</p>

          <p>Our support team will contact you as soon as possible.</p>

          <hr>

          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>

          <br>

          <p>Regards,</p>
          <h3>Gupta Cab Service Team</h3>
        </div>
      `,
    });

    if (customerMail.success) {
      console.log("✅ Customer contact mail sent");
    } else {
      console.error(
        "❌ Customer contact mail failed:",
        customerMail.error?.message
      );
    }

    return res.status(201).json({
      success: true,
      message: "Contact submitted successfully",
      data: contact,
      email: {
        admin: adminMail.success,
        customer: customerMail.success,
      },
    });
  } catch (error) {
    console.error("❌ Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ==========================
// Get All Contacts
// ==========================

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll({
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.error("❌ Get Contacts Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ==========================
// Delete Contact
// ==========================

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    await Contact.destroy({
      where: { id },
    });

    return res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    console.error("❌ Delete Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact,
};
