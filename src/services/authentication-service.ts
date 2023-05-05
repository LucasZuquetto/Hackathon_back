import { badRequestError } from "../errors/badRequest-error";
import { createUser } from "../repositories/authentication-repository";

export async function createUserService({
   email,
   name,
}: {
   name: string;
   email: string;
}) {
   if (!name || !email) {
      throw badRequestError("dados inválidos");
   }

   return await createUser({ name, email });
}
