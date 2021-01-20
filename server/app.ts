// const createError = require("http-errors"); // содержит коды ошиьок с их описанием
import * as express from "express";
import * as mongoose from "mongoose";
import * as config from "config";
import * as logger from "morgan"; // логирование всех действий

import signup from "./routes/auth/routeSignup";
import auth from "./routes/auth/routeAuth";
import createEvent from "./routes/event/createEvent";
import corsMiddleware from "./middleware/cors.middleware";

const PORT = config.get("serverPort");

// * Создание сервера
const app = express();
app.use(corsMiddleware);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(`/`, signup); // папка с файлами роутинга
app.use(`/`, auth); // папка с файлами роутинга
app.use(`/`, createEvent); // папка с файлами роутинга

const start = async () => {
  try {
    // * подключение к БД
    await mongoose.connect(config.get("urlDB"));

    app.listen(PORT, () => {
      console.info(`Server has been started on port ${PORT}`);
    });
  } catch (e) {
    console.warn(`An error has occurred: ${e}`);
  }
};
start();
