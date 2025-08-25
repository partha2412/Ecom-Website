import express from 'express'
import { getProduct, getProducts } from '../controller/productController.js';

const router = express.Router();

router.get('/:id',getProduct)  //search products
router.get('/',getProducts)     //get all products

export default router;