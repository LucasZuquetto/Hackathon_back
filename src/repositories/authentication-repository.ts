import { User } from "../models/User.ts";

export async function createUser({
   email,
   name,
   password,
}: {
   name: string;
   email: string;
   password: string;
}) {
   return await User.create({ name, email, password });
}
