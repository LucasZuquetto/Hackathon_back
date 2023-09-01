import { Router } from "express";
import {
   createController,
   readController,
} from "../controllers/api-controller.js";

const apiRouter = Router();

apiRouter
   .get("/read/:tableName", readController)
   .post("/create/:tableName", createController);

export default apiRouter;
