import { badRequestError } from "../errors/badRequest-error.ts";
import { createUser } from "../repositories/authentication-repository.ts";

export async function createUserService({
   email,
   name,
   password,
}: {
   name: string;
   email: string;
   password: string;
}) {
   if (!name || !email || !password) {
      throw badRequestError("dados inválidos");
   }

   return await createUser({ name, email, password });
}
