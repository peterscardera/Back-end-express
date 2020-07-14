const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const mainRouter = require("./routes/mainRouter");

//Call express to create a HTTP server
const app = express();

//Express configuration (Express v4.16+ comes built in with json parser)
app.use(morgan("dev"));
app.use(helmet());
app.set("port", process.env.PORT || 8000);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes
app.use("/api", mainRouter); // could have many if there unrelated

//if we have an error and didnt find a fitting route. firward the request with the error
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

//handle the errors or anywhere else in the application
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
