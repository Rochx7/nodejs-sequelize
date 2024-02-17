const Controller = require("./Controller.js");
const PersonServices = require("../services/PersonServices.js");

const personServices = new PersonServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }

  async getEnrollment(req, res) {
    const { studentId } = req.params;
    try {
      const listEnrollments = await personServices.getEnrollmentByStudent(
        Number(studentId)
      );
      return res.status(200).json(listEnrollments);
    } catch (error) {
      //erro
    }
  }
}

module.exports = PersonController;
