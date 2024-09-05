const express = require("express");
const router = require("./routes/form");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const ReqUser = require("./models/folioUser");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;
mongoose
  .connect(MONGO_URL, {
    serverSelectionTimeoutMS: 3000,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas", err));

app.use("/api/form", router);
// app.post("/api/form", async (req, res) => {
//   const { fullName, email, mobileNumber, userMsg } = req.body;
//   console.log(req.body);
//   if (!fullName || !email || !mobileNumber || !userMsg) {
//     res.status(201).json({ message: "Email Already existed" });
//   } else {
//     await ReqUser.create({ fullName, email, mobileNumber, userMsg });
//     res.status(200).json({ message: "Form data received successfully!" });
//   }
// });

app.listen(PORT, () => {
  console.log("server started");
});
