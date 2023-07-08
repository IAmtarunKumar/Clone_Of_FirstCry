const mongoose = require("mongoose")

//schema

const userSchema = mongoose.Schema({
    // name  : {type : String , required : true},
    // email  : {type : String , required : true},
    // password  : {type : String , required : true}
    name : String,
    mobile : Number,
    email : String,
    password : String,
    
})

//model

const UserModel = mongoose.model("user" , userSchema)

module.exports={
    UserModel
}