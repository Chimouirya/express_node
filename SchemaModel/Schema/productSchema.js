import {Schema} from "mongoose"


let productSchema =  Schema(
{
    name: String,
    price : Number,
    rating : Number,
},{
    timestamps: true,
}
)

export default productSchema