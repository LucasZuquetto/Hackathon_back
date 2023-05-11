import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export function validateUser(req: Request, res: Response, next: NextFunction) {
   next();
}

export function verifyJWT(req: Request, res: Response, next: NextFunction) {
   const header = req.headers["authorization"]
   if (!process.env.JWT_SECRET) {
      return res.sendStatus(500);
   }
   if(!header){
      return res.sendStatus(401)
   }
   const token = header.split(" ")[1]
   try {
      const payload = jwt.verify(token, process.env.JWT_SECRET) as {userId:number}
      res.locals.userId = payload.userId
      next();
   } catch (error) {
      console.error(error)
      res.sendStatus(500)
   }
}
