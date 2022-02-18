const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const CartSchema=new Schema({
    userId:{
        type:String,
    },
    items:[{
        product_id: {
            type:String
        },
        name: {
            type: String,
        },
        quantity: {
            type:Number,
            required:true,
            min:[1,'Product quantity should be atleast 1'],
            default:1
        },
        price: {
            type:Number
        },
        src: {
            type:String
        }
    }],

    bill: {
        type:Number,
        required:true,
        default:0
    }
});

module.exports=Cart=mongoose.model('cart',CartSchema);
