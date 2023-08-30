import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
   "postgresql://postgres:12345@localhost:2345/hackathon_dev?schema=public"
);

export { sequelize };
