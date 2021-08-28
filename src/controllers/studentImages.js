const Student = require("../models/Student");
const { store } = require("./sessions");

module.exports = {
  async store(req, res) {
    const { filename } = req.file;

    const { studentId } = req;

    if (!filename)
      return res.status(400).send({ error: "Campo imagem é obrigatório" });

    try {
      const student = await Student.findByPk(studentId);

      const protocol = req.connection.encrypted ? "https://" : "http://";

      student.image = `${protocol}${req.headers.host}/uploads/${filename}`;

      student.save();

      res.status(201).send({
        studentId,
        image: student.image,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
