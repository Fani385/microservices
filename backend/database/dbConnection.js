const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.MONGO_URL;

mongoose
  .connect(URL, { dbName: 'crm_apis' })
  .then((result) => {
    console.log("Mongoose connected to ", result.connections[0].host);
  })
  .catch((err) => {
    console.log("Connection NOT Successful" + err);
  });