import { prisma } from "../config/database";
import { badRequestError } from "../errors/badRequest-error";

export async function createUser({email, name}:{name:string,email:string}) {
    if (!name || !email) {
        throw badRequestError("dados inválidos");
     }
    return await prisma.users.create({ data: { email, name } });
 }