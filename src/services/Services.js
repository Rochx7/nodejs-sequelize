const dataSource = require("../models");

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRegisters() {
    return dataSource[this.model].findAll();
  }

  async getOneRegister(id) {
    return dataSource[this.model].findByPk(id);
  }

  async create(body) {
    return dataSource[this.model].create({ body });
  }

  async updateRegister(updatedData, id) {
    const updatedRegisterList = dataSource[this.model].update(updatedData, {
      where: {
        id,
      },
    });

    if (updatedRegisterList[0] === 0) {
      return false;
    }
    return true;
  }

  async delete(id) {
    return dataSource[this.model].destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = Services;
