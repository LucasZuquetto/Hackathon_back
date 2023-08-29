import express from "express";
import cors from "cors";
import { loadEnv } from "./config/envs.ts";
import router from "./routers/index.ts";

loadEnv();

const app = express();

app.use(cors())
   .use(express.json())
   .use(router);

export default app;
