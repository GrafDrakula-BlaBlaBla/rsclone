// const createError = require("http-errors"); // содержит коды ошиьок с их описанием
import * as express from "express";
import * as mongoose from "mongoose";
import * as config from "config";
import * as logger from "morgan"; // логирование всех действий

import login from "./routes/auth/routeLogin";
import corsMiddleware from "./middleware/cors.middleware";

const PORT = config.get("serverPort");

// * Создание сервера
const app = express();
app.use(corsMiddleware);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(`/app`, login); // папка с файлами роутинга

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
// export default app;

/*
-----------------------------------------------------------------------------------------------------------------------------
catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.json({
    statusCode: 404,
  });
});

error handler
app.use(function (err, req, res, next) {
  res.json({
    statusCode: 500,
    message: err.message,
    stack: err.stack,
  });
});


 view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); // render (pug) - отрисовывает шаблоны  наших страниц, на его месте могут быть другие инструменты
-----------------------------------------------------------------------------------------------------------------------------
*/

/*
-----------------------------------------------------------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, "public"))); // позволяет указать путь к файлам в папке public
-----------------------------------------------------------------------------------------------------------------------------
*/

/*
------------------------------------------------------------------------
// кастомные Route
app.use("/", indexRouter);
app.use("/users", usersRouter);
------------------------------------------------------------------------
*/
