const express = require('express')
 const cors = require('cors')
 const mysql = require('mysql')

const app = express()

app.use(cors())

const port = 3000
//łączymy się z bazą danych
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "losowanie1"
})
//potwierdzenie połączenia
con.connect(function(err){
    if(err) console.log(err)
    else console.log("Połączono z bazą danych")    
})

const path = require('path');

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/appadmn.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'appadmn.js'));
});


app.get("/pobierz_nazwe_kandydata", (req,res)=>{
    //pobiera nam z naszej bazy danych to co stworzyliśmy
    const sql = "SELECT * FROM kandydaci"
    //tworzymy zapytanie
    con.query(sql, function(err, result, fields){
        if(err) console.log(err)
        else res.send(result)
    })
})
//pobieramy z bazy danych
app.get("/pobierz", (req,res)=>{
    //pobiera nam z naszej bazy danych to co stworzyliśmy
    const sql = "SELECT * FROM losowanie"
    //tworzymy zapytanie
    con.query(sql, function(err, result, fields){
        if(err) console.log(err)
        else res.send(result)
    })
})

//SELECT pobiera a INSERT dodaje

//wysyłamy do bazy danych
app.get("/add/:nazwauzytkownika/:pesel", (req,res)=>{
    const nazwau = req.params.nazwauzytkownika
    const pesel = req.params.pesel
    //tworzymy zapytanie
    const sql = `INSERT INTO losowanie (nazwa_wylosowanego_kandydata,pesel_losujacego) VALUES ('${nazwau}','${pesel}')`
    con.query(sql, function(err, result, fields){
        if(err) console.log(err)
        else res.send("Dodano los!!")
    })
})

app.get('/admin/data', function(req, res) {
    res.send("Witaj w panelu administracyjnym!");
  });

app.listen(port, ()=>{
    console.log("Aplikacja działa na porcie: "+port)
})