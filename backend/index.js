const express = require("express");
const cors = require("cors")
const nodemailer = require("nodemailer")
const { userRouter } = require("./router/user.router");
const { connection } = require("./config/db");
const jwt = require("jsonwebtoken");
const { auth } = require("./config/middleware/auth.middle");
const { productRouter } = require("./router/product.router");
require("dotenv").config();

const app = express();
app.use(cors())
app.use(express.json()); //json parsar

app.get("/", (req, res) => {
  res.send("welcome dear");
});

//user router
app.use("/users", userRouter);

//product router 
app.use("/product" , productRouter)




app.listen(process.env.port || 5000, async() => {
  await connection
  console.log("Database is connected")
  console.log(`${process.env.port} is working`);
});
