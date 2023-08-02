const express = require("express")
const { ProductModel } = require("../model/product.model")

const productRouter = express.Router()


productRouter.get("/get" , async(req,res)=>{
    let data = await ProductModel.find()
    res.send(data)
})

//product post route

productRouter.post("/post" , async(req,res)=>{
    let payload = req.body

    try {
        let product = new ProductModel(payload)
        await product.save()
        res.send({msg : "New Product is Posted"})
    } catch (error) {
        console.log(error)
    }
})

//subcategory

productRouter.get("/subcategory/:id", async(req,res)=>{
    let id = req.params.id
    let arr = id.trim().split("+")
    try {
        let data = await ProductModel.find({"subcategory" : {$in : arr}})
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

//color
productRouter.get("/color/:id", async(req,res)=>{
    let id = req.params.id
    let arr = id.trim().split("+")
    try {
        let data = await ProductModel.find({"color" : {$in : arr}})
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
//color end

//discount start 

productRouter.get("/discount/:id", async(req,res)=>{
    let id = req.params.id
    let arr = id.trim().split("+")
    try {
        let data = await ProductModel.find({"discountRange" : {$in : arr}})
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})


// discount end 

// price start 
productRouter.get("/price/:id", async(req,res)=>{
    let id = req.params.id
    let arr = id.trim().split("+")
    try {
        let data = await ProductModel.find({"priceRange" : {$in : arr}})
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
// price end 


// age start 
productRouter.get("/age/:id", async(req,res)=>{
    let id = req.params.id
    let arr = id.trim().split("+")
    try {
        let data = await ProductModel.find({"ageRange" : {$in : arr}})
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
// age end 


// gender start 
productRouter.get("/gender/:id", async(req,res)=>{
    let id = req.params.id
    let arr = id.trim().split("+")
    try {
        let data = await ProductModel.find({"gender" : {$in : arr}})
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
// gender end 


// material start 
productRouter.get("/material/:id", async(req,res)=>{
    let id = req.params.id
    let arr = id.trim().split("+")
    try {
        let data = await ProductModel.find({"material" : {$in : arr}})
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
// material end 




module.exports=  {productRouter}