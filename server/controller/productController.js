import ProductModel from "../models/ProductsDB.js";

export async function getProducts(req,res){
    const products = await ProductModel.find();
    res.json(products)
}

export async function getProduct(req,res){
    const products = await ProductModel.findById(req.params.id);
    res.json(products)
}