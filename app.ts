// const createError = require("http-errors"); errors code
import * as express from "express";
import * as mongoose from "mongoose";
import * as config from "config";
import * as logger from "morgan";

const path = require('path');

import signup from "./routes/auth/routeSignup";
import auth from "./routes/auth/routeAuth";
import completionEvent from "./routes/event/completionEvent";
import createEvent from "./routes/event/createEvent";
import dataForProfile from "./routes/profile/dataForProfile";
import dataEventUser from "./routes/profile/dataEventUser";
import corsMiddleware from "./middleware/cors.middleware";
import createMapMain from "./routes/event/createMapMain";
import routerEventInfo from "./routes/event/eventInfo";
import dataAboutNowEvents from "./routes/profile/dataAboutNowEvents";
import dataAboutPastEvents from "./routes/profile/dataAboutPastEvents";
import dataAboutFeatureEvents from "./routes/profile/dataAboutFeatureEvents";
import comleteEvent from "./routes/event/comleteEvent";
import userInfo from "./routes/userInfo";

const PORT: Number = config.get("serverPort");

// * Создание сервера
const app = express();

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/client/index.html'));
});

app.use(express.static('/client'));

app.use(corsMiddleware);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routing folders
app.use("/", completionEvent);
app.use(`/`, signup);
app.use(`/`, auth);
app.use(`/`, createEvent);
app.use(`/`, createMapMain);
app.use(`/`, dataForProfile);
app.use("/", routerEventInfo);
app.use("/", dataEventUser);
app.use("/", dataAboutNowEvents);
app.use("/", dataAboutPastEvents);
app.use("/", dataAboutFeatureEvents);
app.use("/", comleteEvent);
app.use("/", userInfo);

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
