import { dbTables } from "../config/database";

export async function createUser({
   email,
   name,
   password,
}: {
   name: string;
   email: string;
   password: string;
}) {
   return await dbTables.Users.create({ name, email, password });
}
