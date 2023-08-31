import { Request, Response } from "express";
import { readService } from "../services/read-service.ts";

export async function readController(req: Request, res: Response) {
   const { tableName } = req.params;
   try {
      const data = await readService(tableName);
      res.send(data);
   } catch (error) {
      res.sendStatus(404);
   }
}
