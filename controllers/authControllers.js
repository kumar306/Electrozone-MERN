const User=require("./../models/users");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const path=require("path");
require("dotenv").config({path:path.resolve(__dirname,"./../.env")});

module.exports.signup = (req,res) => {
  
    if(!req.body.name || !req.body.email || !req.body.password) {
        res.status(400).json({emptyerror:"Empty fields not allowed"});
    }

    User.findOne({email:req.body.email})
    .then(user => {
        if(user)
            return res.status(400).json({userexists:"User already exists with given email"});
            
        const name=req.body.name;
        const password=req.body.password;
        const email=req.body.email;
        const new_user=new User({name,email,password});

        bcrypt.genSalt(10,(err,salt) => {
            bcrypt.hash(password,salt,(err,hash) => {
                if(err) throw err;
                new_user.password=hash;
                new_user.save()
                .then(user => {
                    jwt.sign(
                        { id:user._id },
                       process.env.JWT_SECRET, 
                       {
                           expiresIn:"2d"
                       },
                       (err,token) => {
                           if(err) throw err;
                           res.json({
                               token,
                               user: {
                                   id:user._id,
                                   name:user.name,
                                   email:user.email
                               }
                           });
                       } 
                    )
                })
            })
        })
    })
    .catch(err=> {
        console.log(err);
    });
}


module.exports.login = (req,res) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({emptyerror:"Please enter all fields"});
    }
    User.findOne({email:req.body.email})
    .then(user => {
        if(!user)
            return res.status(400).json({usernotexists:"User with given email doesn't exist"});
        bcrypt.compare(req.body.password,user.password)
        .then(isMatch => {
            if(!isMatch) {
                res.status(400).json({pwderror:"Password incorrect"});
            }
            jwt.sign({
                id:user._id
            },
            process.env.JWT_SECRET,
            {expiresIn:"1d"},
            (err,token) => {
                if(err) throw err;
                res.json({
                    token,
                    user: {
                        id:user._id,
                        name:user.name,
                        email:user.email
                    }
                });
            });
            
        })
    })
    .catch(err => console.log(err));
};


module.exports.get_user = (req,res) => {

    User.findById({id:req.user.id})
    .select('-password')
    .then(user => res.json(user));
}

//-password means excluding password field alone in the document because of minus sign