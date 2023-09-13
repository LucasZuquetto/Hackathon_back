import { Router } from "express";
import {
   createController,
   readController,
} from "../controllers/api-controller.js";

const apiRouter = Router();

apiRouter
   .get("/:tableName", readController)
   .post("/:tableName", createController);

export default apiRouter;
