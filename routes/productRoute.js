import { Router } from "express";
import { createProduct, deleteSpecificProduct, readAllProduct, readSpecificProduct, updateSpecificProduct } from "../productController/productController.js";





let productRouter = Router();

productRouter
.route("/")
.post(createProduct)
.get(readAllProduct)

productRouter

.route("/:id")
.get(readSpecificProduct)
.patch(updateSpecificProduct)
.delete(deleteSpecificProduct)

export default productRouter