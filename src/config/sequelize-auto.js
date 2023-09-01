import dotenv from "dotenv";
import SequelizeAuto from "sequelize-auto";

dotenv.config();

const dbName = process.env.DB_NAME || "";
const dbUser = process.env.DB_USER || "";
const dbPass = process.env.DB_PASSWORD || "";
const dbHost = process.env.DB_HOST || "";
const dbDialect = process.env.DB_DIALECT || "";
const dbPort = process.env.DB_PORT || "";

const options = {
   host: dbHost,
   dialect: dbDialect,
   directory: "../models",
   port: Number(dbPort),
   caseModel: "o",
   lang: "ts",
   useDefine: true,
   singularize: false,
};
const auto = new SequelizeAuto(dbName, dbUser, dbPass, options);

auto
   .run()
   .then((data) => {
      const tableNames = Object.keys(data.tables);
      console.log(tableNames);
   })
   .catch((error) => console.error(error));
