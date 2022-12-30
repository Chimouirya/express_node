import { ProductModel } from "../schemaModel/model.js"

   

  export let createProduct= async(req,res)=>{
    let data = req.body
    try {
        let result = await ProductModel.create(data)
        res.json(result)
    } catch (error) {
        res.json(error.message)
        
    }
   }
  export let readAllProduct= async(req,res)=>{
    try {
        let results = await ProductModel.find({})
        res.json(results)
    } catch (error) {
        res.json(error.message)
        
    }
   }
  export let readSpecificProduct= async(req,res)=>{
    let id= req.params.id
    
    try {
        let result = await ProductModel.findById(id)
        res.json(result)
    } catch (error) {
        res.json(error.message)
        
    }
   }
  export let updateSpecificProduct= async(req,res)=>{
    let id = req.params.id
    let updatedData = req.body;
    try {
        let result = await ProductModel.findByIdAndUpdate(id,updatedData,{ new: true })
        res.json(result)
    } catch (error) {
        res.json(error.message)
        
    }
   }
  export let deleteSpecificProduct= async(req,res)=>{
    let id = req.params.id
    try {
        let result = await ProductModel.findByIdAndDelete(id)
        res.json(result)
    } catch (error) {
        res.json(error.message)
        
    }
   }

