const express = require('express');
// const mysql = require('mysql2'); // Comment this out
const app = express();
const port = process.env.PORT || 8080;

// Comment out the DB connection for a moment
/*
const db = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'ebdb' 
});
*/

app.get('/', (req, res) => {
    res.send("<h1>Hello! The Networking is finally working!</h1>");
});

app.listen(port, '0.0.0.0', () => {
    console.log(`App running on port ${port}`);
});
