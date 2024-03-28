import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) =>{
    console.error('An error occurred:', err);

    if (err.name === 'ValidationError') {
        res.status(400).send('Validation Error');
    }else if(err.name === 'SyntaxError') {
        res.status(400).send('SyntaxError Error'); 
    } else {
        res.status(500).send('Internal Server Error');
    }
};

export default errorHandler;