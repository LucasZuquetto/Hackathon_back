import { sequelize } from "../config/database.js";

export async function readRepository(tableName: string) {
   return await sequelize.models[tableName].findAll();
}

export async function createRepository(tableName: string, body: any) {
   return await sequelize.models[tableName].create(body);
}

export async function updateRepository(
   tableName: string,
   body: any,
   id: number
) {
   return await sequelize.models[tableName].update(body, { where: { id } });
}

export async function deleteRepository(
   tableName: string,
   id: number
) {
   return await sequelize.models[tableName].destroy({where: { id } });
}