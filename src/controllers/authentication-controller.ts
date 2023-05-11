import { Request, Response } from "express";
import { createUserService } from "../services/authentication-service";
import httpStatus from "http-status";

export async function signUpController(req: Request, res: Response) {
   try {
      const userObject = req.body;
      const userCreated = await createUserService(userObject);
      res.send(userCreated);
   } catch (error: any) {
      if (error.code === httpStatus.BAD_REQUEST) {
         console.error(error.message);
         return res.sendStatus(400);
      }
      console.error(error.message);
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
   }
}
