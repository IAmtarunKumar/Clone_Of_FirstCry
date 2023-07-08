const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const nodemailer = require("nodemailer")

// Model 
const { UserModel } = require("../model/user.model");
const { BlacklistModel } = require("../model/blacklist.model");
const {OtpModel} = require("../model/otp.model")

const userRouter = express.Router();

//register

userRouter.post("/register", async (req, res) => {
  let { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 8, async (err, hash) => {
      const user = new UserModel({ name, email, password: hash });
      await user.save();
      res.send({msg : "Registered succsesfully"});
    });
  } catch (err) {
    res.send("Error in registering the user");
    console.log(err);
  }
});

//login
userRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    console.log(user);
    if (user) {
      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          var token = jwt.sign({ name: "tarun" }, "masai");
          res.send({ msg: "login succesfully", token: token });
        } else {
          res.send(err);
          console.log(err);
        }
      });
    }
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});


//logout

userRouter.post("/logout" , async (req,res)=>{
    let token = req.headers.authorization
    console.log(token)

    let blacklisted = new BlacklistModel({token})
    await blacklisted.save()
    res.send({msg : "Logout Successfully"})
})


userRouter.post("/mail" , async(req,res)=>{

  let {email} = req.body

let data =await UserModel.findOne({email : email})
// res.send(data)

if(data){


  const otp = Math.floor(1000 + Math.random() * 9000);


//otp save in db
let user = new OtpModel({"otp" : otp , "email" : email })
await user.save()



let massage = `Your OTP is ${otp}`
  //  {data.email , name , massage} = req.body
  
      
  var transporter = nodemailer.createTransport({
      service : "gmail",
        auth : {
            user : "tarunkumarmahto2000@gmail.com",
            pass : "wlghihttobcllmvj"
        }
    });
    
    var mailOptions = {
      from :"tarunkumarmahto2000@gmail.com",
      to :  email,
      subject : "FirstCry Login OTP",
      text : massage
  }
    
    transporter.sendMail(mailOptions , function(error,info){
        if(error){
                  
                   
                    console.log(error);
                }else{
                   
             
                    console.log("Email has been sent", express.response.info)
                }
    })
  
    res.send({msg : "Email is Sent"})
    
  }else{
    res.send({msg : "Please Login First"})
  }
    
  
  })




  
//login
userRouter.post("/otp", async (req, res) => {
  let {otp} = req.body;

  let userOtp = await OtpModel.findOne({otp})

  // res.send(userOtp)

  if(userOtp.otp){



  try {
    let user = await UserModel.findOne({ "email" : userOtp.email });
    console.log(user);


    

    if (user) {
      
       
          var token = jwt.sign({ name: "tarun" }, "masai");
          res.send({ msg: "login succesfully", token: token });
        
      
    }
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }

  }
});





  


module.exports = {
  userRouter,
};
