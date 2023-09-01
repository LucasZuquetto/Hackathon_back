import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ProductsAttributes {
  id: number;
  name?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductsPk = "id";
export type ProductsId = Products[ProductsPk];
export type ProductsOptionalAttributes = "id" | "name" | "description" | "createdAt" | "updatedAt";
export type ProductsCreationAttributes = Optional<ProductsAttributes, ProductsOptionalAttributes>;

export class Products extends Model<ProductsAttributes, ProductsCreationAttributes> implements ProductsAttributes {
  id!: number;
  name?: string;
  description?: string;
  createdAt!: Date;
  updatedAt!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Products {
    return Products.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      createdAt: '',
      updatedAt: ''
    }, {
    sequelize,
    tableName: 'Products',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Products_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
