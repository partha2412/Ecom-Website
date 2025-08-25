import OrderModel from "../models/OrdersDM.js";

export async function getOrder(req, res) {
    const orders = await OrderModel.findById(req.params.id)
    res.json(orders)
}

export async function getOrders(req, res) {
    const orders = await OrderModel.find()
    res.json(orders)
}
