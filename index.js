const express = require('express');
const index = express();

index.get("/", (req, res) => {
    res.send("Ola a todos\nEsta eh a versao 1.2.\n");
})

index.listen(8080, () => console.log('App running on 8080') );

module.exports = index;
