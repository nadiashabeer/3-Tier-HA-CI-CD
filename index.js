const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 8080;

// This pulls the database info from the "Environment Properties" we set in Beanstalk
const db = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'ebdb' 
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// A special route to check if the database is working
app.get('/db-check', (req, res) => {
    db.query('SELECT 1 + 1 AS solution', (error, results) => {
        if (error) {
            res.status(500).send("Database Connection Failed: " + error.message);
        } else {
            res.send("Database Connection Successful! Solution: " + results[0].solution);
        }
    });
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
