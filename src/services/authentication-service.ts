import { badRequestError } from "../errors/badRequest-error.ts";
import { createUser } from "../repositories/authentication-repository.ts";

export async function createUserService({
   email,
   name,
   dateOfBirth,
   cpf,
   password,
}: {
   name: string;
   email: string;
   dateOfBirth: Date;
   cpf: string;
   password: string;
}) {
   if (!name || !email || !dateOfBirth || !cpf || !password) {
      throw badRequestError("dados inválidos");
   }

   return await createUser({ name, email, dateOfBirth, cpf, password });
}
