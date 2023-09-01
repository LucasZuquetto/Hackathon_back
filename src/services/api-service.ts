import {
   createRepository,
   readRepository,
} from "../repositories/api-repository.js";
import { capitalizeString } from "../utils/capitalize-string.js";

export async function readService(tableName: string) {
   const capitalizedString = capitalizeString(tableName);
   return await readRepository(capitalizedString);
}

export async function createService(tableName: string, body: any) {
   const capitalizedString = capitalizeString(tableName);
   return await createRepository(capitalizedString, body);
}
