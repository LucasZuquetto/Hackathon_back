import { readRepository } from "../repositories/read-repository.ts";

export async function readService(tableName: string) {
   return await readRepository(tableName);
}
