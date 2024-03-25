const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect();

app.get('/', (req, res) => {
    connection.query('SELECT name FROM people', (err, results) => {
        if (err) throw err;
        let response = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Full Cycle Rocks!</title>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.0.0/dist/tailwind.min.css" rel="stylesheet">
            </head>
            <body class="bg-gray-800 text-white">
                <div class="container mx-auto p-5">
                    <h1 class="text-4xl font-bold text-center my-5">Full Cycle Rocks!</h1>
                    <ul class="list-disc">
        `;
        results.forEach(row => {
            response += `<li class="ml-5">${row.name}</li>`;
        });
        response += `</ul></div></body></html>`;
        res.send(response);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
