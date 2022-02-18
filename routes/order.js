const express=require("express");
const router=express.Router();
const orderController=require("./../controllers/orderControllers");

router.get("/order/:id",orderController.get_orders);

router.post("/order/:id",orderController.checkout_items);

module.exports=router;