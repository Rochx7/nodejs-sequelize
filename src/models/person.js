"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Course, {
        foreignKey: "teacher_id",
      });
      Person.hasMany(models.Enrollment, {
        foreignKey: "student_id",
        // scope: {
        //   status: "matriculado",
        // },
        as: "enrolledLessons",
      });
    }
  }
  Person.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Person",
      tableName: "persons",
    }
  );
  return Person;
};
