const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 8080;

// SAFE CONNECTION: We don't connect immediately
const db = mysql.createPool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'ebdb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 5000 // 5 seconds timeout
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/db-check', (req, res) => {
    // We test the connection ONLY when this page is clicked
    db.getConnection((err, connection) => {
        if (err) {
            return res.status(500).send(`
                <h1>Database Connection Failed</h1>
                <p>Error Code: ${err.code}</p>
                <p>Error Message: ${err.message}</p>
                <hr>
                <p>Troubleshooting: Check if your RDS Endpoint is correct and Security Groups allow Port 3306.</p>
            `);
        }
        res.send("<h1>Database Connection Successful!</h1><p>The 3-Tier Architecture is fully operational.</p>");
        connection.release(); // Put the connection back in the pool
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`App running on port ${port}`);
});
