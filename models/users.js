const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const validator=require("validator");

const UserSchema=new Schema({
    name: {
        required:true,
        type:String
    },
    email: {
        type:String,
        required:[true,'Please enter an email'],
        lowercase:true,
        unique:true,
        validate:[validator.isEmail,'Please enter valid email']
    },
    password: {
        type:String,
        required:[true,'Please enter valid password'],
        minlength:[5,'Password length should be 5 or more']
        
    },
    reg_date: {
        type:Date,
        default:Date.now
    }

});

module.exports=User=mongoose.model('user',UserSchema);