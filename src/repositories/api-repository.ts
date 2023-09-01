import { sequelize } from "../config/database.js";

export async function readRepository(tableName: string) {
   return await sequelize.models[tableName].findAll();
}

export async function createRepository(tableName: string, body: any) {
   return await sequelize.models[tableName].create(body);
}
