import { Router } from "express";
import healthRouter from "./health-router.ts";
import authenticationRouter from "./authenticationn-router.ts";
import readRouter from "./read-router.ts";

const router = Router();

router
   .use("/health", healthRouter)
   .use("/", authenticationRouter)
   .use("/read", readRouter);

export default router;
