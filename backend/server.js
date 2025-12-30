const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

//-----db connection--------
const connectDB = require("./config/db");
connectDB();
//------------------------------------------------------------
const app = express();
app.use(express.json());

const router = require("../backend/v1")

app.use("/api/v1", router);

app.get("/", (req, res) => {
    res.send("Welcome to SnapMap API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));