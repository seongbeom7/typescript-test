import { NextFunction, Request, Response } from "express";
import Border from '../models/borderModel';
import {fbDB} from '../connectors/fbDB';
import {successResponseMiddleware} from '../middleware/customResponseHandler'; 
import { HttpStatusCode } from "../util/statusCode";

export const createBoder = (req:Request, res:Response, next: NextFunction) =>{
        try{         
        const newBorder: Border = req.body;
        const ref = fbDB.ref('border');
        const newBorderRef = ref.push();
        newBorderRef.set(newBorder);
        successResponseMiddleware(res,HttpStatusCode.OK,newBorder);
        // next();
    } catch (error) {
        console.error('Error creating data:', error);
    }
}