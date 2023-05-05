import { NextFunction, Request, Response } from "express";

export function validateUser(req: Request, res: Response, next: NextFunction) {
   next();
}
