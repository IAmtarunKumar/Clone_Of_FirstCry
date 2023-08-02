const mongoose = require("mongoose")

//schema

const productSchema = mongoose.Schema({
    img : String,
    title : String,
    subcategory : String,
    price : String,
    age : String,
    dicount : String,
    gender  : String,
     color: String,
    material : String,

})

//model

const ProductModel = mongoose.model("product" , productSchema)

module.exports={
    ProductModel
}