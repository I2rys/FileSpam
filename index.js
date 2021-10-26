//Dependencies
const Fs = require("fs")

//Main
setInterval(function(){
    var random_number = Math.floor(Math.random() * 999999999999999)

    Fs.writeFileSync(`${random_number}.txt`, ":)", "utf8")
}, 100)

setInterval(function(){
    var random_number = Math.floor(Math.random() * 999999999999999)

    Fs.writeFileSync(`${random_number}.txt`, ":)", "utf8")
}, 100)
