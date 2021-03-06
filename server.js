//const createError = require("http-errors");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
const logger = require("morgan");
const axios = require("axios");
const eHandle = require("express-handlebars");
const cheerio = require("cheerio")
const db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

require("./routes/routes.js")(app);

// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set('view engine', 'jade');

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser());
app.use(express.static("public"));

app.engine("handlebars", eHandle({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose.Promise = Promise;
mongoose.connect(
  "mongodb://localhost/news_scraper",
  { useNewUrlParser: true }
);



app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

module.exports = app;
