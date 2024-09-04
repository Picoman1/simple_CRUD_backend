const express= require("express")
const Product= require("../models/product.model")
const router = express.Router()
const {getproducts,getproduct,createProduct,updateProduct,deleteProduct}=require("../controllers/product.controller.js")


router.get('/',getproducts);
router.get('/:id',getproduct);
router.post('/',createProduct);
//update 
router.put('/:id',updateProduct)
//delete
router.delete('/:id',deleteProduct)


module.exports = router;