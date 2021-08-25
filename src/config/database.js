require("dotenv").config();

module.exports = {
  url: process.env.DATABASE_URL,
  config: {
    dialect: "mysql",
    logging: console.log,
    define: {
      timestamp: true,
      underscored: true,
    },
  },
};
