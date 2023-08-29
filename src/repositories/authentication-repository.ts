// import { prisma } from "../config/database";

export async function createUser({
   email,
   name,
   cpf,
   dateOfBirth,
   password,
}: {
   name: string;
   email: string;
   cpf: string;
   dateOfBirth: Date;
   password: string;
}) {
   return
   // return await prisma.users.create({
   //    data: { email, name, cpf, dateOfBirth, password },
   // });
}
