import express from 'express'
import { getOrder, getOrders } from '../controller/orderController.js';
const router = express.Router();

router.get('/:id',getOrder)
router.get('/',getOrders)

export default router;
