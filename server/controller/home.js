import ProductModel from "../models/ProductsDB.js"

export default (req, res) => {
    console.log("TYHIS IS HOME")
    console.log(ProductModel.Product);
    return res.status(200).send({message: "THIS IS HOME", data: ProductModel})
}