const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    // id column
    id: {
      // Data type is an integer
      type: DataTypes.INTEGER,
      // Null values are not allowed
      allowNull: false,
      // id is set as primary key
      primaryKey: true,
      // ids for categories auto generated in table
      autoIncrement: true
    },

    // category_name column
    category_name: {
      // Data type is a string
      type: DataTypes.STRING,
      // Null values are not allowed
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
