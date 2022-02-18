const Cart=require("./../models/cart");
const Item=require("./../models/items");

module.exports.get_cart_items = async (req,res) => {
    const userId=req.params.id;
    try {
        let cart=await Cart.findOne({userId:userId});
        if(cart)
            return res.status(201).send(cart);
        else 
            return res.send(null);
    }
    catch(e)
    {
        console.log(e);
        res.status(500).send("Something went wrong");
    }
}

module.exports.add_item = async(req,res) => {
    const userId=req.params.id;
    console.log(req.body.productId);
    console.log(req.body.quantity);
    try
    {
        let cart=await Cart.findOne({userId:userId});
        let item=await Item.findById(req.body.productId);
        if(!item)
            return res.status(404).send("Item not available");
        const title=item.title;
        console.log(item.title+" "+item.price);
        const price=item.price;
        const productId=req.body.productId;
        const quantity=req.body.quantity;
        const src=req.body.src;
        if(cart)
        {
            let item_idx=cart.items.findIndex(elt => elt.product_id==productId);
            if(item_idx>-1)
            {
                let cart_item=cart.items[item_idx];
                cart_item.quantity+=quantity;
                cart.items[item_idx]=cart_item;
            }
            else
            {
                cart.items.push({product_id:productId,name:title,quantity:quantity,price:price,src:src});
            }
            cart.bill+=quantity*price;
            cart = await cart.save();
            return res.status(201).send(cart);
        }
        else
        {
            const new_cart=await Cart.create({
                userId,
                items:{product_id:productId,name:title,quantity:quantity,price:price,src:src},
                bill:quantity*price
            });
            return res.status(201).send(new_cart);
        }
    }
    catch(e)
    {
        console.log(e);
        res.status(500).send("An error occured.");
    }
}

module.exports.delete_item = async(req,res) => {
    const userId=req.params.userId;
    const itemId=req.params.itemId;
    try {
        let cart = await Cart.findOne({userId:userId});
        let item_idx=cart.items.findIndex(elt => elt.product_id == itemId);
        if(item_idx>-1)
        {
            let del_item=cart.items[item_idx];
            cart.bill-=del_item.quantity*del_item.price;
            cart.items.splice(item_idx,1);
        }
        cart=await cart.save();
        return res.status(201).send(cart);
    }
    catch(e)
    {
        console.log(e);
        return res.status(500).send("An error occured.");
    }
}

module.exports.increase_quantity = async(req,res) => {
    const userId=req.params.id;
    const itemId=req.params.itemId;
    try {
        let cart=await Cart.findOne({userId:userId});
        if(cart && cart.items && cart.items.length>0)
        {
            let item_idx=cart.items.findIndex(elt => elt.product_id == itemId);
            if(item_idx>-1)
            {
                let new_item=cart.items[item_idx];
                new_item.quantity=new_item.quantity+1;
                cart.items[item_idx]=new_item;
            }
            cart.bill+=cart.items[item_idx].price;
            cart=await cart.save();
            return res.status(201).send(cart);
        }
        else throw e;
    }
    catch(e)
    {
        console.log(e);
        return res.status(500).send("An error occurred.");
    }
}

module.exports.decrease_quantity = async(req,res) => {
    const userId=req.params.id;
    console.log(userId);
    const itemId=req.params.itemId;
    console.log(itemId);
    try {
        let cart=await Cart.findOne({userId:userId});
        if(cart && cart.items && cart.items.length>0)
        {
            let item_idx=cart.items.findIndex(elt => elt.product_id == itemId);
            if(item_idx>-1)
            {
                let new_item=cart.items[item_idx];
                new_item.quantity=new_item.quantity-1;
                cart.items[item_idx]=new_item;
            }
            cart.bill-=cart.items[item_idx].price;
            cart=await cart.save();
            return res.status(201).send(cart);
        }
        else throw e;
    }
    catch(e)
    {
        console.log(e);
        return res.status(500).send("An error occurred.");
    }

}