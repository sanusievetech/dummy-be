const express = require("express");
const cors = require("cors");
const path = require("path");
const logger = require("morgan");
require("dotenv/config");

process.env.TZ = "Asia/Jakarta";

const port = process.env.PORT || 5000;

const app = express();

//Middlewares
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));

//ROUTES
app.use("/api/dummy-data", require("./routes/dummy.route"));

app.get("/", (_, res) => {
    res.send("We are on home");
});

app.listen(port, () => {
    console.log(`Listening to port ${port};`)
});