import { Request, Response, NextFunction} from "express";

const defaultResponse =(req: Request, res: Response, next: NextFunction)=>{
    res.json({
        status: res.statusCode,
        succes: true,
        message: 'Response sent successfully',
        data: null
    });
};


export {defaultResponse};
