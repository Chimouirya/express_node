import { Router } from "express";




let firstRouter = Router();

 firstRouter.route("/")
 .get((req,res)=>{
    res.json({name:'shyam', age:23, isMarried: false})
 })
.post((req,res)=>{
    res.json({name:'rishi', age:24, isMarried:true})
})
.patch((req,res)=>{
    res.json({name:'shyam and rishi'})
})
.delete((req,res)=>{
    res.json({name:'bishal'})
})
firstRouter.route("/name")
.get((req,res)=>{
     res.json({name:'rishi',method:'get'})
})
.post((req,res)=>{
     console.log(req.body)
     res.json(req.body)
})
.patch((req,res)=>{
     res.json({name:'Khatri',method:'patch'})
})
.delete((req,res)=>{
     res.json({name:'jorpati',method:'delete'})
})
export default firstRouter