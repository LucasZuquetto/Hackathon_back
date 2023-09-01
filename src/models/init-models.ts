import type { Sequelize } from "sequelize";
import { Products as _Products } from "./Products";
import type { ProductsAttributes, ProductsCreationAttributes } from "./Products";
import { SequelizeMeta as _SequelizeMeta } from "./SequelizeMeta";
import type { SequelizeMetaAttributes, SequelizeMetaCreationAttributes } from "./SequelizeMeta";
import { Users as _Users } from "./users";
import type { UsersAttributes, UsersCreationAttributes } from "./users";

export {
  _Products as Products,
  _SequelizeMeta as SequelizeMeta,
  _Users as Users,
};

export type {
  ProductsAttributes,
  ProductsCreationAttributes,
  SequelizeMetaAttributes,
  SequelizeMetaCreationAttributes,
  UsersAttributes,
  UsersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Products = _Products.initModel(sequelize);
  const SequelizeMeta = _SequelizeMeta.initModel(sequelize);
  const Users = _Users.initModel(sequelize);


  return {
    Products: Products,
    SequelizeMeta: SequelizeMeta,
    Users: Users,
  };
}
