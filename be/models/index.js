const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];

const FileExtension = require("./FileExtension");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);
const db = {};

db.sequelize = sequelize;
db.FileExtension = FileExtension;

FileExtension.init(sequelize);

db.sequelize = sequelize;

FileExtension.associate(db);

module.exports = db;
