const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    email: { type: String },
    mobileNumber: { type: Number },
    userMsg: { type: String },
  },
  { timestamps: true }
);

const ReqUser = mongoose.model("UserReqs", UserSchema);
module.exports = ReqUser;
