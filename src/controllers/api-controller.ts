import { Request, Response } from "express";
import { createService, readService } from "../services/api-service.js";

export async function readController(req: Request, res: Response) {
   const { tableName } = req.params;
   try {
      const data = await readService(tableName);
      res.send(data);
   } catch (error) {
      res.sendStatus(404);
   }
}

export async function createController(req: Request, res: Response) {
   const { tableName } = req.params;
   const data = req.body;
   try {
      const createdObject = await createService(tableName, data);
      res.send(createdObject);
   } catch (error: any) {
      if(error.name = "SequelizeValidationError"){
         return res.status(400).send(error.errors.map((error: any) => error.message));
      }
      console.log(error.errors.map((error:any) => error.path))
      res.status(404).send(error.name);
   }
}
