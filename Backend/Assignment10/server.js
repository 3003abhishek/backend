const expresss = require("express");
const app = require("./index");
const dotenv = require("dotenv");
dotenv.config();
const connectMongoDb=require("./db");

const DataRouter = require(`${__dirname}/routes/data.routes`);
let port = process.env.PORT;
console.log(port);

app.use("/getdata", DataRouter);


app.listen(5000, () => {
    connectMongoDb();
    console.log(`Your Port is working at ${port}`);
});
