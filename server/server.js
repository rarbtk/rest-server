const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("../routes/user");

class Server {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.set("view engine", "hbs");
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(router);
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Corriendo exitosamente en el puerto ${process.env.PORT}`);
    });
  }
}

module.exports = Server;
