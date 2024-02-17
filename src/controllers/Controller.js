class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }
  async getAll(req, res) {
    try {
      const listRegister = await this.entityService.getAllRegisters();
      return res.status(200).json(listRegister);
    } catch (error) {
      //error
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const register = await this.entityService.getOneRegister(id);
      return res.status(200).json(register);
    } catch (error) {
      //error
    }
  }

  async newCreate(req, res) {
    const createData = req.body;
    try {
      const newRegister = await this.entityService.create(createData);
      return res.status(200).json(newRegister);
    } catch (error) {
      //error
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      const isUpdated = await this.entityService.updateRegister(
        updatedData,
        Number(id)
      );
      if (!isUpdated) {
        return res.status(400).json({ message: "Register not updated" });
      }
      return res.status(200).json({ message: "Updated successfully" });
    } catch (error) {
      //erro
    }
  }
}

module.exports = Controller;
