import { prisma } from "../config/database";

export async function createUser({email, name}:{name:string,email:string}) {
    return await prisma.users.create({ data: { email, name } });
 }