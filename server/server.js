const express = require("express");
const cors = require("cors");
const db_name = "2020jokesdb";
const app = express();
const mongoose = require("mongoose");
const port = 8000;

app.use(cors());
app.use(express.json());

require("./config/mongoose")(db_name);
require("./routes/routes");

app.get("/test", (req,res) => res.json({msg: "it's working"}));

app.listen(port, () => console.log(`Listening on port ${port}`));