// console.log("janano")
// const http=require("http")
// http.createServer(function(req,res){
//     res.end("hello from server")
// }).listen(5000)
// console.log("start server");
//req.body ->played for the request
//req.params-.part from url
//  const express= require('express')

//  var app= express();

// // //var json= require('json')

 

// app.get('/user',function(req,res)
//  {
//      res.send("jana")
//  })

//  app.get('/fact/:num', function(req,res)
//  {
//   //   req.body -> payload for the request
//   //req.params -> part from url 
//       console.log(req.params.num)
//    var myfact =fact(req.params.num)
//      res.json("fib is" + req.params.num*2)
//  })



const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("start server");
});

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

app.get('/fact/:num', function(req, res) {
    const num = parseInt(req.params.num);
    const fact = factorial(num);
    res.json("fact is " + fact);
});

function fibonacci(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

app.get('/fib/:num', function(req, res) {
    const num = parseInt(req.params.num);
    const fib = fibonacci(num);
    res.json("fib is " + fib);
});
function MultiplicationTable(number) {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(i * number);
    }
    return table;
}
app.get('/Multipli/:num',function(req,res)
{
    var Multipli =MultiplicationTable(req.params.num)
    res.json(Multipli)
});
function comSum(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result += i;
    }
    return result;
}
app.get('/sum/:num', function(req, res) {
    const num = parseInt(req.params.num);
    const sum = comSum(num);
    res.json("sum is" + sum);
});
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
app.get('/Palindrome/:string',function(req,res)
{
    var Palindrome =isPalindrome(req.params.string)
    res.json(Palindrome)
});
var server = app.listen(7000, function() {
    var host = server.address().address; // local one  
    var port = server.address().port;
});
