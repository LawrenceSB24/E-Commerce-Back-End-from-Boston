const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// Model exports for Tag and Product
const Tag = require('../models/Tag');
const Product = require('../models/Product');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_id: {
      type: DataTypes.INTEGER,
      references: Product.id
    },

    tag_id: {
      type: DataTypes.INTEGER,
      references: Tag.id
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
