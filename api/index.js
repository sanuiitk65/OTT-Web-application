import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";

dotenv.config();

const app = express();
const port=3000;

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true, //useNewUrlParser has no effect since Node.js Driver version 4.0.0
    useUnifiedTopology:true, //useUnifiedTopology has no effect since Node.js Driver version 4

}).then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err));

app.use(express.json());

app.use("/api/auth/",authRoute);


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})