import { Sequelize } from "sequelize";
import { initModels } from "../models/init-models.ts";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.DATABASE_URL || "";

const sequelize = new Sequelize(databaseUrl);

const dbTables = initModels(sequelize);

export { sequelize, dbTables };
