const path=require("path");
const jwt=require("jsonwebtoken");
require("dotenv").config({path:path.resolve(__dirname,"./../.env")});

function auth(req,res,next) {
    const token=req.header("x-auth-token");
    if(!token)
        res.status(401).json({no_token:"No authorization token, user not authorized"});
    
    try 
    {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user.decoded;
        next();
    }
    catch(ex)
    {
        res.status(401).json({notvalid:"Token obtained not valid"});
    }
}

module.exports=auth;

//status code 401 is unauthorized, 400 is for bad request