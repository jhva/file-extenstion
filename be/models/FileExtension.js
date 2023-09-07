const Sequelize = require("sequelize");

module.exports = class FileExtension extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        customExtensionName: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: false,
          comment: "커스텀 확장자",
        },
        fixFileExtensionJSON: {
          type: Sequelize.JSON,
          allowNull: true,
          unique: false,
          comment: "고정 확장자",
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
