const Contact = require("../models/Contact");
const transporter = require("../config/mail");

// ==========================
// Create Contact (User)
// ==========================
const createContact = async (req, res) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;

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
    // Admin Email
    // ==========================
    try {
      const adminInfo = await transporter.sendMail({
        from: `"Gupta Cab Service" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        replyTo: email,
        subject: "📩 New Contact Request - Gupta Cab Service",
        html: `
          <h2>📩 New Contact Request</h2>
          <p><b>Name:</b> ${fullName}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Subject:</b> ${subject}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });

      console.log("✅ Admin mail sent:", adminInfo.response);
    } catch (err) {
      console.error("❌ Admin Mail Error:", err);
    }

    // ==========================
    // Customer Email
    // ==========================
    try {
      const customerInfo = await transporter.sendMail({
        from: `"Gupta Cab Service" <${process.env.EMAIL_USER}>`,
        to: email.trim(),
        subject: "Thank You for Contacting Gupta Cab Service 🚖",
        html: `
          <div style="font-family:Arial;padding:20px;">
            <h2>Thank You for Contacting Gupta Cab Service 🚖</h2>

            <p>Hello <b>${fullName}</b>,</p>

            <p>We have received your message successfully.</p>

            <p>Our support team will contact you as soon as possible.</p>

            <hr>

            <p><b>Subject:</b> ${subject}</p>
            <p>${message}</p>

            <br>

            <p>Regards,</p>
            <h3>Gupta Cab Service Team</h3>
          </div>
        `,
      });

      console.log("✅ Customer mail sent:", customerInfo.response);
    } catch (err) {
      console.error("❌ Customer Mail Error:", err);
    }

    return res.status(201).json({
      success: true,
      message: "Contact submitted successfully",
      data: contact,
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
// Get All Contacts (Admin)
// ==========================
const getContacts = async (req, res) => {

  try {

    const contacts = await Contact.findAll({

      order: [

        ["createdAt", "DESC"]

      ]

    });


    res.status(200).json({

      success: true,

      data: contacts

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      success: false,

      message: "Internal Server Error"

    });

  }

};




// ==========================
// Delete Contact (Admin)
// ==========================
const deleteContact = async (req, res) => {

  try {

    const { id } = req.params;

    await Contact.destroy({

      where: {
        id
      }

    });


    res.status(200).json({

      success: true,

      message: "Contact deleted successfully"

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      success: false,

      message: "Internal Server Error"

    });

  }

};




module.exports = {

  createContact,

  getContacts,

  deleteContact

};