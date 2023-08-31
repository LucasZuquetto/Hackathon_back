import app from "./app.ts";
import { sequelize } from "./config/database.ts";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 4001;

try {
   await sequelize.authenticate();
   console.log("connection has been established");
   app.listen(port, () => {
      console.log(`${process.env.NODE_ENV} environment`);
      console.log(`Server is listening on port ${port}`);
   });
} catch (error) {
   console.error("Unable to connect");
}
