import { Router } from "express";

const healthRouter = Router()

healthRouter.get("/", (_req,res) => res.send("OK!"))

export default healthRouter