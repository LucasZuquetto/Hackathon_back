import express from "express";
import cors from "cors";
import { loadEnv } from "./config/envs";
import router from "./routers";

loadEnv();

const app = express();

app.use(cors())
   .use(express.json())
   .use(router);

export default app;
