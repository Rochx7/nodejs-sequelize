const Services = require("./Services");

class PersonServices extends Services {
  constructor() {
    super("Person");
  }

  async getEnrollmentByStudent(id) {
    const student = await super.getOneRegister(id);
    const listEnrollments = await student.enrolledLessons();
    return listEnrollments;
  }
}
module.exports = PersonServices;
