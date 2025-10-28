import { Router } from "express";
import autorRouter from "./autor-routes/autor.routes.js";

export class AppRoutes{


    static get routes():Router{
        const router = Router();
        
        router.get("/",(req,res)=>{
            res.status(200).json({message:"API is working"});
        });

        router.use("/autor",autorRouter)


        return router;
    }
}