import jwt from "jsonwebtoken";

function verify(req,res,next){
    const authHeader = req.headers.token;

    if(authHeader){

        const token = authHeader.split(" ")[1];
        
        jwt.verify(token,process.env.SECRET_KEY,(err,info)=>{
            if(err)
                res.status(403).json("token is not valid");

            req.user=info;

            next();
        })

    }else{
        return res.status(401).json("you are not authenticated")
    }



}


export default verify;
