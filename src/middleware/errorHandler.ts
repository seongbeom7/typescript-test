import { Request, Response, NextFunction } from 'express';
import {errorResponseMiddleware} from './customResponseHandler';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) =>{
    console.error('An error occurred:', err);

    // if (err.name === 'ValidationError') {        
        
    // }else if(err.name === 'SyntaxError') {
    //     res.status(400).send('SyntaxError Error'); 
    // } else {
    //     res.status(500).send('Internal Server Error');
    // }
    errorResponseMiddleware(res,err,err.body);
    next();
};

export default errorHandler;