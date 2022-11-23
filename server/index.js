const express = require("express");

const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "RASmanager@123",
    database: "ras"
});


const app = express();

app.use(cors());
app.use(express.json());

///
/// Data retrived: All [Pessoa] table rows
///
app.get("/pessoas", (req, res) => {
    let query = "SELECT * FROM PESSOA";

    db.query(query, (error, result) => {
        res.json(result);
    });

});

///
/// It response by parsing [Pessoa] column {PESSOA_ID} and retrives respective data
///
app.get("/pessoa/:id", (req, res) => {
    let query = "SELECT * FROM PESSOA WHERE PESSOA_ID =  " + "'" + (req.params.id) + "'";

    
    db.query(query, (error, result) => {
        res.json(result);
    });
});

///
/// It response by parsing [Pessoa] column {PESSOA_ID} and retrives respective data
///
app.get("/auth/:email", (req, res) => {
    let query = "SELECT NOME, EMAIL, SENHA FROM PESSOA WHERE EMAIL = " + "'" + (req.params.email.toLocaleLowerCase()) + "'";
    db.query(query, (error, result) => {
        res.json(result);
    });

});

///
/// Data retrived: All [Evento] table rows
///
app.get("/eventos", (req, res) => {
    let query = "SELECT * FROM EVENTO";

    db.query(query, (error, result) => {
        res.json(result);
    });

});

///
/// It response by parsing [Evento] column {EVENTO_ID} and retrives respective data
///
app.get("/evento/:id", (req, res) => {
    let query = "SELECT * FROM EVENTO WHERE EVENTO_ID =  " + "'" + (req.params.id) + "'";

    db.query(query, (error, result) => {
        res.json(result);
    });
});

///
/// Data retrived: All [Reuniao] table rows
///
app.get("/reunioes", (req, res) => {
    let query = "SELECT * FROM REUNIAO";

    db.query(query, (error, result) => {
        res.json(result);
    });

});

///
/// It response by parsing [Reuniao] column {REUNIAO_ID} and retrives respective data
///
app.get("/reuniao/:id", (req, res) => {
    let query = "SELECT * FROM REUNIAO WHERE REUNIAO_ID = " + "'" + (req.params.id) + "'";

    db.query(query, (error, result) => {
        res.json(result);
    });

});

//#//#//#//#//#//#//#//#//# [ CADASTRO DE USUÁRIO ] //#//#//#//#//#//#//#//#//#

app.post("/pessoas/cadastrar/:nome/:email/:senha", (req, res) => {
    let query = "INSERT INTO PESSOA VALUES (NULL, NULL, '" + req.params.nome + "', '2022-09-20T03:00:00.000Z', '2022-09-20T03:00:00.000Z', '" + req.params.email + "', '00000000001', '" + req.params.senha + "', '71999999998', 'ATIVO');";

    console.log(query);

    db.query(query, (error, result) => {
        if (error) return res.json({error: error});
        return res.json(result);
    });
})

const _serverPort = 3001;

app.listen(_serverPort, () => {
    console.log("RUNNING SERVER AT PORT: " + _serverPort);
})