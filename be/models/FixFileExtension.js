const Sequelize = require("sequelize");

module.exports = class FixFileExtension extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        fixFileExtensionName: {
          type: Sequelize.JSON(),
          allowNull: false,
          unique: false,
          comment: "고정 확장자",
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "FixFileExtension",
        tableName: "fixFileExtension",
        comment: "고정 확장자",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      },
    );
  }
  static associate(db) {}
};
