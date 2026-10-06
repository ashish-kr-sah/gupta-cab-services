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


    const hashPassword = await bcrypt.hash(password, 10);


    const admin = await Admin.create({

      name,
      email,
      password: hashPassword,

    });



    res.status(201).json({

      success: true,
      message: "Admin created successfully",
      data: admin,

    });



  } catch (error) {


    res.status(500).json({

      success:false,
      message:error.message,

    });


  }

};




// ==========================
// Admin Login
// ==========================
const loginAdmin = async (req,res)=>{


  try {


    const {email,password}=req.body;



    const admin = await Admin.findOne({

      where:{email},

    });



    if(!admin){

      return res.status(404).json({

        success:false,
        message:"Admin not found",

      });

    }





    const checkPassword = await bcrypt.compare(

      password,

      admin.password

    );





    if(!checkPassword){


      return res.status(401).json({

        success:false,
        message:"Invalid Password",

      });


    }







    const token = jwt.sign(

      {

        id:admin.id,

        email:admin.email,

      },


      process.env.JWT_SECRET,


      {

        expiresIn:"7d"

      }


    );







    res.json({


      success:true,

      message:"Login Successful",


      token,


      admin:{


        id:admin.id,

        name:admin.name,

        email:admin.email,


      }


    });





  }catch(error){


    res.status(500).json({

      success:false,

      message:error.message,

    });


  }


};







// ==========================
// Admin Dashboard
// ==========================
const dashboard = async (req,res)=>{


  try {



    const totalBookings = await Booking.count();


    const totalContacts = await Contact.count();







    const recentBookings = await Booking.findAll({

      limit:5,

      order:[
        ["createdAt","DESC"]
      ]

    });







    const recentContacts = await Contact.findAll({

      limit:5,

      order:[
        ["createdAt","DESC"]
      ]

    });









    res.json({


      success:true,


      dashboard:{


        totalBookings,


        totalContacts,


        recentBookings,


        recentContacts


      },



      admin:req.admin,


    });







  }catch(error){



    console.log(error);



    res.status(500).json({

      success:false,

      message:error.message,

    });



  }



};







module.exports = {

  createAdmin,

  loginAdmin,

  dashboard,

};