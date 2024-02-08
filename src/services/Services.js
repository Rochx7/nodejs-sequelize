const dataSource = require("../models");

class Services {
  constructor(modelName) {
    this.model = modelName;
  }
  async getAllRegisters() {
    return dataSource[this.model].findAll();
  }

  async updateRegister(updatedData, id) {
    const updatedRegisterList = dataSource[this.model].update(updatedData, {
      where: {
        id: id,
      },
    });

    if (updatedRegisterList[0] === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Services;
