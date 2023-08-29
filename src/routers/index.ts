import { Router } from "express";
import healthRouter from "./health-router.ts";
import authenticationRouter from "./authenticationn-router.ts";

const router = Router();

router.use("/health", healthRouter).use("/", authenticationRouter);

export default router;
