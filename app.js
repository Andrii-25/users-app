const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("./utils/jwt");
const errorHandler = require("./utils/error-handler");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());
app.use("/users", require("./controllers/user.controller"));
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log("App is running...");
});
