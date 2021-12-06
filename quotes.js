const express = require("express");

const app = express();

const quotes = require("inspirational-quotes");


app.get("/", function(req, res)
{
    console.log("Quotes are on webpage!");
    var new_quotes = quotes.getRandomQuote();

    res.send("<h1>"+new_quotes+"</h1>");
});

app.listen(3000, function()
{
    console.log("Server is at work!");
});

