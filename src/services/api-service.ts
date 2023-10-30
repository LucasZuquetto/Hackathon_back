import {
   createRepository,
   readRepository,
   updateRepository,
   deleteRepository
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

export async function updateService(tableName: string, body: any, id: string) {
   const capitalizedString = capitalizeString(tableName);
   const idNumber = Number(id);
   return await updateRepository(capitalizedString, body, idNumber);
}

export async function deleteService(tableName: string, id: string) {
   const capitalizedString = capitalizeString(tableName);
   const idNumber = Number(id);
   return await deleteRepository(capitalizedString, idNumber);
}