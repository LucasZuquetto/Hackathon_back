import { Router } from "express";
import healthRouter from "./health-router";
import authenticationRouter from "./authenticationn-router";

const router = Router();

router.use("/health", healthRouter).use("/", authenticationRouter);

export default router;
