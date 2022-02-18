const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const ItemSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stars:{
        type:Number
    },
    category:{
        type:String,
        required:true
    },
    date_added:{
        type:Date,
        default:Date.now
    },
    src: {
        type:String,
        required:true
    }
});

module.exports=Item=mongoose.model('item',ItemSchema);