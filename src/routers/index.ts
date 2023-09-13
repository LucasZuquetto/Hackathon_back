import { Router } from "express";
import healthRouter from "./health-router.ts";
import authenticationRouter from "./authenticationn-router.ts";
import apiRouter from "./api-router.ts";

const router = Router();

router
   .use("/health", healthRouter)
   .use("/", authenticationRouter)
   .use("/api", apiRouter);

export default router;
