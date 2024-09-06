const express = require("express");
const router = express.Router();
const ReqUser = require("../models/folioUser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const PASS = process.env.APP_PASS;
const EMAIL = process.env.EMAIL;

router.post("/", async (req, res) => {
  const { fullName, email, mobileNumber, userMsg } = req.body;
  const str = userMsg.trim();
  if (!fullName || !email || !mobileNumber || !userMsg || str.length === 0) {
    res.status(201).json({ message: "Please fill all fields" });
  } else {
    await ReqUser.create({ fullName, email, mobileNumber, userMsg });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.ethereal.email",
      port: 465,
      secure: true, // true for port 465, false for other ports
      auth: {
        user: EMAIL,
        pass: PASS,
      },
    });
    const mailOptions = {
      from: EMAIL,
      to: email,
      subject: "Thanks for Your Message",
      html: `</br><h2><b>hey ${fullName}</b></h2></br></br></br><p>I hope you’re having a great day! 😊. I will respond to your message - <i>"${userMsg}"</i> soon.</br><big><b>stay tuned!<b></big></p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error", error);
        res.status(200).json({ message: "Error occurred !!" });
      } else {
        res
          .status(200)
          .json({ message: "Sent successfully! Check your Gmail." });
      }
    });
  }
});
module.exports = router;
