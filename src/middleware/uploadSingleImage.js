const Multer = require("multer");

const uploadSingleImage = Multer({
  storage: Multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      const fileName = Date.now() + "." + file.originalname.split(".").pop();
      cb(null, fileName);
    },
    fileFilter: (req, file, callback) => {
      let allowedTypes = ["image/png", "image/jpeg"];

      if (allowedTypes.includes(file.mimetype)) {
        callback(null, true);
      } else {
        callback(new Error("Tipo do arquivo inválido"));
      }
    },
    limits: {
      fileSize: 1024 * 1024 * 2, //máximo de 2Mb
    },
  }),
});

module.exports = uploadSingleImage.single("image");
