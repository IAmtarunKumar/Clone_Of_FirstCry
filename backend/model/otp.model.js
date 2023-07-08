const mongoose = require("mongoose")

//schema
const otpSchema = mongoose.Schema({
  otp : String,
  email : String
})

//model
const OtpModel = mongoose.model("otp" , otpSchema)

module.exports={
    OtpModel
}