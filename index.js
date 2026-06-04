const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 8080;

const db = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'ebdb' 
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/db-check', (req, res) => {
    db.query('SELECT 1 + 1 AS solution', (error, results) => {
        if (error) {
            res.status(500).send("Database Connection Failed: " + error.message);
        } else {
            res.send("<h1>Database Connection Successful!</h1><p>The 3-Tier Architecture is fully operational.</p>");
        }
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`App running on port ${port}`);
});
