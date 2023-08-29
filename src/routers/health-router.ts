import { Router } from "express";
import { verifyJWT } from "../middlewares/authentication-middleware.ts";

const healthRouter = Router();

healthRouter.get("/", verifyJWT, (_req, res) => res.send("OK!"));

export default healthRouter;
