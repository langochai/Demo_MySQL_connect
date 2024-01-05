const express = require('express');
const app = express();
const mysql = require('mysql2')

const port = 3060;

const sqlconn = mysql.createConnection({
    host: "127.0.0.1",
    password: "your password", //replace with the password that is used to log in for your mysql server
    user: "root",
    database: "your database name", // replace with your database name that was already created
});

sqlconn.connect((err) => {
    if (err) throw err;
    console.log("Database connection successful");
});
app.get('/', (req,res)=>{
    sqlconn.query("select 10 as randomNumber",(err, result, fields)=>{
        console.log(result) // this should print [ { randomNumber: 10 } ] as result
        res.end()
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
})