const Student = require("../models/Student");
const { store } = require("./sessions");

module.exports = {
  async store(req, res) {
    const { filename } = req.file;

    console.log(req.file);

    const { studentId } = req;

    if (!filename)
      return res.status(400).send({ error: "Campo imagem é obrigatório" });

    try {
      const student = await Student.findByPk(studentId);

      student.image = filename;

      student.save();

      res.status(201).send({
        studentId,
        image: filename,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
