const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.js")[env];

const FileExtension = require("./FileExtension");
const FixFileExtension = require("./FixFileExtension");
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);
const db = {};

db.sequelize = sequelize;
db.FileExtension = FileExtension;
db.FixFileExtension = FixFileExtension;

FileExtension.init(sequelize);
FixFileExtension.init(sequelize);

db.sequelize = sequelize;

FileExtension.associate(db);
FixFileExtension.associate(db);

module.exports = db;
