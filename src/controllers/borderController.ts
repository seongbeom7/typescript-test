import { Request, Response } from "express";
import Border from '../models/borderModel';
import {fbDB} from '../connectors/fbDB'; 

export const createBoder = (req:Request, res:Response) =>{
    try{    
        const newBorder: Border = req.body;
        
        const ref = fbDB.ref('border');
        const newBorderRef = ref.push();
        newBorderRef.set(newBorder);

        res.status(201).send('Data created successfully');
    } catch (error) {
        console.error('Error creating data:', error);
    }
}