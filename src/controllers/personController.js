const database = require("../models");

class PersonController {
  static async getAll(req, res) {
    try {
      // access models
      const personsList = await database.Person.findAll();
      return res.status(200).json(personsList);
    } catch (error) {
      // Error
    }
  }
}

module.exports = PersonController;
