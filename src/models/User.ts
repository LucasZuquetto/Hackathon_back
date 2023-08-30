import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.ts";

export const User = sequelize.define("User",{
    name:DataTypes.TEXT,
    password:DataTypes.TEXT,
    email:DataTypes.TEXT
})