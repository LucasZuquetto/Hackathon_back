import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function signInController(req: Request, res: Response) {
   if (!process.env.JWT_SECRET) {
      return res.sendStatus(500);
   }
   const login = req.body;
   if (login) {
      const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, {
         expiresIn: 300,
      });
      res.send(token);
   }
}
