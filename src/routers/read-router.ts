import { Router } from "express";
import { readController } from "../controllers/read-controller.ts";

const readRouter = Router();

readRouter.get("/:tableName", readController);

export default readRouter;
