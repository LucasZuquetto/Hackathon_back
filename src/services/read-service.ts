import { readRepository } from "../repositories/read-repository.ts";

export async function readService(tableName: string) {
   const capitalizedString = tableName.charAt(0).toUpperCase() + tableName.slice(1)
   return await readRepository(capitalizedString);
}
