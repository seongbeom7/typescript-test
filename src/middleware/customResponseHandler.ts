import { Request, Response, NextFunction} from "express";
import {HttpStatusCode, HttpStatusMessage} from "../util/statusCode";

function successResponseMiddleware( res: Response, status: HttpStatusCode, data?: any): void;
function successResponseMiddleware( res: Response, status: HttpStatusCode): void {
    if (arguments.length === 3) {
        // data 매개변수가 전달된 경우
        const data = arguments[2];
        res.status(status)
            .json({
                status: status,
                succes: true,
                message: HttpStatusMessage[status],
                data: data
                });
    } else {
        // data 매개변수가 전달되지 않은 경우
        res.status(status)
            .json({
                status: status,
                succes: true,
                message: HttpStatusMessage[status],
                data: null
                });
    }
}

export {successResponseMiddleware};

function errorResponseMiddleware( res: Response, err: Error) {
        res.status(res.statusCode)
            .json({
                status: err.status,
                succes: false,
                message: err.message,
                data: err.body
                });
}

export {errorResponseMiddleware};
