const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 8080;

const db = mysql.createPool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: null, // Set to null if you didn't specify a DB name in RDS
    connectTimeout: 10000
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/db-check', (req, res) => {
    db.getConnection((err, connection) => {
        if (err) {
            return res.status(500).send(`<h1>DB Error</h1><p>${err.message}</p>`);
        }
        connection.query('SELECT 1 + 1 AS solution', (error) => {
            connection.release();
            if (error) return res.status(500).send(error.message);
            res.send("<h1>Database Connection Successful!</h1><p>3-Tier Architecture is LIVE.</p>");
        });
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
