const express = require('express');
const app = express();

app.listen(3000, ()=> console.log("El servidor funciona bien"));

app.get('/', (req,res )=>
{
    res.sendFile(__dirname + "/tesis.html")
})