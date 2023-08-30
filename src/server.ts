import app from "./app.ts";
import { sequelize } from "./config/database.ts";

const port = process.env.PORT || 4000;

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
