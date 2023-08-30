
export async function createUser({
   email,
   name,
   password,
}: {
   name: string;
   email: string;
   password: string;
}) {
   return
   // return await prisma.users.create({
   //    data: { email, name, cpf, dateOfBirth, password },
   // });
}
