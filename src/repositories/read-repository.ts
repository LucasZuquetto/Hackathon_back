import { sequelize } from "../config/database.ts";

export async function readRepository(tableName: string) {
   return await sequelize.models[tableName].findAll();
}
