import { Router } from "express";
import {
   createController,
   readController,
   updateController,
   deleteController
} from "../controllers/api-controller.js";

const apiRouter = Router();

apiRouter
   .get("/:tableName", readController)
   .post("/:tableName", createController)
   .put("/:tableName/:id", updateController)
   .delete("/:tableName/:id",deleteController)

export default apiRouter;
