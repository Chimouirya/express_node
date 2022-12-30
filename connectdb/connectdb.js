import mongoose from "mongoose"

let connectdb = async()=>{
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/samdatabase")
        console.log('Database is connected successfully')
        
    } catch (error) {
        console.log(error.message)
    }
   
}

export default connectdb