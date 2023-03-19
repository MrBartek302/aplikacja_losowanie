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

app.get("/nazwakandy", (req,res)=>{
    //pobiera nam z naszej bazy danych to co stworzyliśmy
    const sql = "SELECT nazwa_kandydata FROM kandydaci"
    //tworzymy zapytanie
    con.query(sql, function(err, result, fields){
        if(err) console.log(err)
        else res.send(result)
    })
})

app.get("/nazwakandywykres", (req,res)=>{
    const sql = "SELECT nazwa_kandydata FROM kandydaci"; // zmienione zapytanie, pobieramy tylko nazwy kandydatów z tabeli kandydaci
    con.query(sql, function(err, result, fields){
        if(err) console.log(err);
        else {
            let labels = []; // tworzymy pustą tablicę, do której będziemy wpisywać nazwy kandydatów
            result.forEach(row => {
                labels.push(row.nazwa_kandydata); // dodajemy nazwy kandydatów do tablicy
            });
            // tworzymy obiekt z danymi dla wykresu
            const data ={
                labels: labels,
                datasets: [{
                    data: itemData,
                    backgroundColor: 'rgb(66, 221, 245)'
                }]
            };
            // tworzymy wykres z nowymi danymi
            const chart = new Chart(
                document.getElementById("wykres"),
                {
                    type: 'bar',
                    data: data,
                    options:{
                        plugins: {
                            legend:{
                                display: false
                            },
                            title: {
                                display: true, 
                                text: 'Głosy'
                            }
                        }
                    }  
                }
            );
            res.send(data); // wysyłamy dane do klienta (opcjonalnie)
        }
    })
})


app.get("/tabelalosy", (req,res)=>{
    //pobiera nam z naszej bazy danych to co stworzyliśmy
    const sql = "SELECT * FROM kandydaci"
    //tworzymy zapytanie
    con.query(sql, function(err, result, fields){
        if(err) console.log(err)
        else res.send(result)
    })
})

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

app.listen(port, ()=>{
    console.log("Aplikacja działa na porcie: "+port)
})

