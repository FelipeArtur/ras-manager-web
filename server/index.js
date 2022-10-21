const express = require("express");

const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    port: 3001,
    user: "jorge",
    password: "cimatec",
    database: "mysql",
});

function printError(error) {
    if (error != null) {
        console.log(error.code + ": " + error.message);
    }
}

const app = express();

app.get("/pessoas", (req, res) => {
    let query = "SELECT * FROM PESSOA";

    db.query(query, (error, result) => {
        printError(error);
    });

});

app.get("/eventos", (req, res) => {
    let query = "SELECT * FROM EVENTO";

    db.query(query, (error, result) => {
        printError(error);
    });

});

app.get("/reunioes", (req, res) => {
    let query = "SELECT * FROM REUNIAO";

    db.query(query, (error, result) => {
        printError(error);
    });

});

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log("rodando servidor");
})