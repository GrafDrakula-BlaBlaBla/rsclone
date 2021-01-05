// const createError = require("http-errors"); // содержит коды ошиьок с их описанием
import * as express from "express";
import * as logger from "morgan"; // логирование всех действий
// const path = require("path");

import todoRouter from "./routes/todos";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/todos", todoRouter); // /todos - корневая папка для роутинга

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.json({
    statusCode: 404,
  });
});

// error handler
app.use(function (err, req, res, next) {
  res.json({
    statusCode: 500,
    message: err.message,
    stack: err.stack,
  });
});

export default app;

/*
-----------------------------------------------------------------------------------------------------------------------------
// view engine setup
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
