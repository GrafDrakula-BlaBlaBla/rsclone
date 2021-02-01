// const createError = require("http-errors"); errors code
import * as express from "express";
import * as mongoose from "mongoose";
import * as config from "config";
import * as logger from "morgan";

import signUp from "./routes/auth/routeSignUp";
import auth from "./routes/auth/routeAuth";
import createEvent from "./routes/event/createEvent";
import dataForProfile from "./routes/profile/dataForProfile";
import corsMiddleware from "./middleware/cors.middleware";
import createMapMain from "./routes/event/createMapMain";
import routerEventInfo from './routes/event/eventInfo';
import userInfo from './routes/userInfo';

const PORT: Number = config.get("serverPort");

// * Создание сервера
const app = express();
app.use(corsMiddleware);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routing folders
app.use(`/`, signUp);
app.use(`/`, auth);
app.use(`/`, createEvent);
app.use(`/`, createMapMain);
app.use(`/`, dataForProfile);
app.use('/', routerEventInfo);
app.use('/', userInfo);

const start = async (): Promise<void> => {
  try {
    await mongoose.connect(config.get("urlDB"));

    app.listen(PORT, () => {
      console.info(`Server has been started on port ${PORT}`);
    });
  } catch (e) {
    console.warn(`An error has occurred: ${e}`);
  }
};
start();
