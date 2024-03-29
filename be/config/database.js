const dotenv = require("dotenv");

const { sequelize } = require("../models");
dotenv.config();

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = { sequelize };
