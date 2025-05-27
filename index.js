const express = require('express');
const index = express();

index.get("/", (req, res) => {
    res.send("Ola a todos");
})

index.listen(8080, () => console.log('App running on 8080') );

module.exports = index;