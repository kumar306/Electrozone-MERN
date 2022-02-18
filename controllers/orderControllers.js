const Order=require("./../models/order");
const Cart=require("./../models/cart");
const User=require("./../models/users");
const path=require("path");
require("dotenv").config({path:path.resolve(__dirname,"./../.env")});
const stripe=require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports.get_orders = async(req,res) => {
    const userId=req.params.id;
    Order.find({userId}).sort({date_ordered:-1})
    .then(orders => res.json(orders));
}

module.exports.checkout_items = async(req,res) => {

    //need the amount,currency,source object and user email to perform stripe checkout
    const userId=req.params.id;
    try {
        const {source} = req.body;
        let cart = await Cart.findOne({userId});
        let user = await User.findOne({_id:userId});
        const email=user.email;

        if(!cart)
            return res.status(404).send("Cart is empty");

        const charge = await stripe.paymentIntents.create({
            amount:cart.bill,
            currency:'inr',
            receipt_email:email
        })

        if(!charge)
            return res.status(404).send("Payment failed");

        const order = await Order.create({
            userId:userId, items:cart.items, bill:cart.bill
        });
   
        let rem=await Cart.findOneAndDelete({userId:cart.userId});
        return res.status(201).send(order);
    }
    catch(e)
    {
        console.log(e);
        res.status(500).send("An error occured.");
    }
}