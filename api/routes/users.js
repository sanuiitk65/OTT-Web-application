import { Router } from "express";
import User from "../models/User.js";
import CryptoJS from"crypto-js";
import verify from "../verifyToken.js"


const router = Router();


//UPDATE

router.put("/:id", verify, async (req,res)=>{

    if(req.user.id == req.params.id || req.user.isAdmin){

        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }

        try{

            const updatedUser = await User.findByIdAndUpdate(req.params.id , {$set:req.body});
            res.status(200).json(updatedUser);

        }catch(err){
            res.status().json(err);
        }

    }else{
        res.status(403).json("you can update only you account")
    }

})
//DELETE

router.delete("/:id", verify, async (req,res)=>{

    if(req.user.id == req.params.id || req.user.isAdmin){

        try{

            const updatedUser = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("user deleted");

        }catch(err){
            res.status().json(err);
        }

    }else{
        res.status(403).json("you can delete only you account")
    }

})
//GET

router.get("/find/:id", async (req,res)=>{


        try{

            const user = await User.findById(req.params.id);
            const {password , ...info} = user._doc;
            res.status(200).json(info);

        }catch(err){
            res.status().json(err);
        }


})
//GET ALL

router.get("/", verify, async (req,res)=>{
    

    const query = req.query.new;

    if(req.user.isAdmin){

        try{

            const users = query ? await User.find().sort({_id:-1}).limit(3) : await User.find();
            res.status(200).json(users);

        }catch(err){
            res.status().json(err);
        }

    }else{
        res.status(403).json("you are not allowed")
    }

})

//USER STATS


export default router;