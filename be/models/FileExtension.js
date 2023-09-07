const Sequelize = require("sequelize");

module.exports = class FileExtension extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        customFileExtension: {
          type: Sequelize.STRING(20),
          allowNull: true,
          unique: false,
        },
        fixFileExtensionIndex: {
          type: Sequelize.JSON,
          allowNull: true,
          unique: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "FileExtension",
        tableName: "fileExtension",
        comment: "파일 확장자 차단 목록",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      },
    );
  }
  static associate(db) {}
};
