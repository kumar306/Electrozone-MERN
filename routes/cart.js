const express=require("express");
const router=express.Router();
const cartController=require("./../controllers/cartControllers");

router.get("/cart/:id",cartController.get_cart_items);

router.post("/cart/:id",cartController.add_item);

router.delete("/cart/:userId/:itemId",cartController.delete_item);

router.put("/cart/:id/:itemId/inc",cartController.increase_quantity);

router.put("/cart/:id/:itemId/dec",cartController.decrease_quantity);

module.exports=router;