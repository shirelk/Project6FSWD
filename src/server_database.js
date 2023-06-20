const mysql = require('mysql2');
const express = require('express')

// Initial Variables
const app = express()
app.use(express.json())

const databaseConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // ------------------- SET YOUR PASSWORD HERE -------------------
    port: 3306, 
    database: '' // ------------------- SET THE DATABASE NAME HERE -------------------
});

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.get('/', async (req,res) => {
    res.send('Koko Lala!')
});

// Connect to the Database and running up the server
databaseConnection.connect((err)=> {
    if (err) throw err;
    console.log("Connected To The Database.");

    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});