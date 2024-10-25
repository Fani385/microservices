const express = require('express');
require("dotenv").config();
require("./database/dbConnection.js");
const apiResponseMiddleware = require("./Middlewares/apiResponseMiddleware.js");
var bodyParser = require('body-parser');
const cors = require('cors');    
bodyParser.json();
bodyParser.urlencoded({ extended: false });




const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
app.use(apiResponseMiddleware);
app.use(express.json());

//enable cors from anywhere
const corsOpts = {
    origin: '*',
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};

app.use(cors(corsOpts));

// app.use("/api/", authRoute);
// app.use("/api/", protectedRouter);
// app.use("/", viewRoutes);




