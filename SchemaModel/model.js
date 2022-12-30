import {model} from "mongoose"

import productSchema from "./Schema/productSchema.js"



export let ProductModel = model("product", productSchema)