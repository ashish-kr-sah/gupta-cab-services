const transporter = require("../config/mail");
const Booking = require("../models/Booking");


// ==========================
// Create Booking (Customer)
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


    // Validation
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


    // Save Booking
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
    // Respond Immediately (don't make user wait for emails)
    // ==========================

    res.status(201).json({

      success: true,

      message: "Booking submitted successfully",

      data: booking,

    });



    // ==========================
    // Admin Notification Mail (background, non-blocking)
    // ==========================

    transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.ADMIN_EMAIL,

      subject: "🚖 New Cab Booking Received",

      html: `

      <h2>New Booking Details 🚖</h2>

      <p><b>Name:</b> ${fullName}</p>

      <p><b>Phone:</b> ${phone}</p>

      <p><b>Email:</b> ${email}</p>

      <p><b>Pickup:</b> ${pickup}</p>

      <p><b>Destination:</b> ${destination}</p>

      <p><b>Cab Type:</b> ${cabType}</p>

      <p><b>Persons:</b> ${persons}</p>

      <p><b>Message:</b> ${message}</p>

      `

    }).then(() => {
      console.log("✅ Admin booking mail sent");
    }).catch((err) => {
      console.error("❌ Admin booking mail error:", err.message);
    });



    // ==========================
    // Customer Confirmation Mail (background, non-blocking)
    // ==========================

    transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: email,

      subject: "🚖 Booking Confirmed - Gupta Cab Service",

      html: `

      <h2>Thank You For Booking With Gupta Cab Service 🚖</h2>


      <p>Dear ${fullName},</p>


      <p>
      Your cab booking has been successfully received.
      </p>


      <h3>Your Booking Details:</h3>


      <p><b>Pickup Location:</b> ${pickup}</p>

      <p><b>Destination:</b> ${destination}</p>

      <p><b>Cab Type:</b> ${cabType}</p>

      <p><b>Persons:</b> ${persons}</p>



      <h3>Next Step 🚖</h3>


      <p>
      Our driver/team will contact you within 20 minutes 
      for further confirmation.
      </p>


      <p>
      Thank you for choosing Gupta Cab Service.
      </p>


      <br>


      <b>
      Gupta Cab Service Team
      </b>

      `

    }).then(() => {
      console.log("✅ Customer booking mail sent");
    }).catch((err) => {
      console.error("❌ Customer booking mail error:", err.message);
    });



  } catch (error) {


    console.error(error);


    res.status(500).json({

      success:false,

      message:"Internal Server Error",

      error:error.message

    });


  }

};





// ==========================
// Get All Bookings (Admin)
// ==========================

const getBookings = async (req,res)=>{

  try{


    const bookings = await Booking.findAll({

      order:[
        ["createdAt","DESC"]
      ]

    });


    res.status(200).json({

      success:true,

      data:bookings

    });



  }catch(error){


    console.error(error);


    res.status(500).json({

      success:false,

      message:"Internal Server Error"

    });


  }

};





// ==========================
// Delete Booking (Admin)
// ==========================

const deleteBooking = async(req,res)=>{

  try{


    const { id } = req.params;


    await Booking.destroy({

      where:{
        id
      }

    });


    res.status(200).json({

      success:true,

      message:"Booking deleted successfully"

    });



  }catch(error){


    console.error(error);


    res.status(500).json({

      success:false,

      message:"Internal Server Error"

    });


  }

};





module.exports = {

  createBooking,

  getBookings,

  deleteBooking

};