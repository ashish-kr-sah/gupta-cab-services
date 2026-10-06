require("dotenv").config();

const transporter = require("./mail");


transporter.sendMail({

    from: process.env.EMAIL_USER,

    to: process.env.ADMIN_EMAIL,

    subject: "Gupta Cab Service Test Mail 🚖",

    text: "Email system successfully connected 🚖"

})
.then(()=>{

    console.log("✅ Email sent successfully");

})
.catch((error)=>{

    console.log("❌ Email error:", error);

});