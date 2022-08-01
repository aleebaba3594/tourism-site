const dotenv = require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const dbconnect = require("./Db_config/db_Connection");
dbconnect();

const Auth = require("./Routes/route");
const port = process.env.PORT;
app.use(Auth);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
