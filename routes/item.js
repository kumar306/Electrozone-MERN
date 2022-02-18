const express=require("express");
const router=express.Router();
const itemController=require("./../controllers/ItemControllers");

router.get("/items/mobiles",itemController.get_mobiles);
router.get("/items/laptops",itemController.get_laptops);
router.get("/items/cameras",itemController.get_cameras);
router.get("/items/audio",itemController.get_audio);

router.post("/items",itemController.post_item);
router.put("/items/:id",itemController.put_item);
router.delete("/items/:id",itemController.delete_item);
router.get("/items/:id",itemController.view_item);

module.exports=router;