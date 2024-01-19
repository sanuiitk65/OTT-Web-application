import { Router } from "express";
import User from "../models/User.js";
import CryptoJS from"crypto-js";
import jwt from "jsonwebtoken";


const router = Router();

//REGISTER


router.post("/register",async (req,res)=>{
    const newUser= new User({
        username: req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),  // for password hashing
    });                                                 
    
    // with async await use try catch

    
    try{
        // console.log(req.body);
        const user = await newUser.save();
        res.status(201).json(user);

        

    }catch(err){
        res.status(500).json(err);
        
    }
     

});


//LOGIN

router.post("/login" , async (req,res)=>{
    try{
        
        const user = await User.findOne({email:req.body.email})
    
        !user && res.status(401).json("wrong password or username");

        //Password valdation
        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            
          res.status(401).json("wrong password or username");
        }

        //if password match then send user in response
        else{
            //hide id and admin access before showing the data as a response
            const accessToken = jwt.sign(
              { id: user._id, isAdmin: user.isAdmin },
              process.env.SECRET_KEY,
              { expiresIn: "5d" }
            );

            const {password , ...info} = user._doc;
            res.status(200).json({...info,accessToken});
        }
            

    }catch(err){
        res.status(501).json(err)
    }
})

export default router;
//module.exports = router;

