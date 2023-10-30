import { Request, Response } from "express";
import {
   createService,
   readService,
   updateService,
   deleteService,
} from "../services/api-service.js";
import httpStatus from "http-status";

export async function readController(req: Request, res: Response) {
   const { tableName } = req.params;
   try {
      const data = await readService(tableName);
      res.send(data);
   } catch (error) {
      console.error(error);
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
      if ((error.name = "SequelizeValidationError")) {
         return res
            .status(400)
            .send(error?.errors?.map((error: any) => error.message));
      }
      console.error(error);
      res.status(404).send(error.name);
   }
}

export async function updateController(req: Request, res: Response) {
   const { tableName, id } = req.params;
   const data = req.body;
   try {
      const updatedObject = await updateService(tableName, data, id);
      res.send(updatedObject);
   } catch (error: any) {
      if ((error.name = "SequelizeValidationError")) {
         console.error(error);
         return res
            .status(400)
            .send(error?.errors?.map((error: any) => error.message));
      }
      console.error(error);
      res.status(404).send(error.name);
   }
}

export async function deleteController(req: Request, res: Response) {
   const { tableName, id } = req.params;
   try {
      await deleteService(tableName, id);
      res.sendStatus(httpStatus.NO_CONTENT);
   } catch (error: any) {
      if ((error.name = "SequelizeValidationError")) {
         console.error(error);
         return res
            .status(400)
            .send(error?.errors?.map((error: any) => error.message));
      }
      console.error(error);
      res.status(404).send(error.name);
   }
}
