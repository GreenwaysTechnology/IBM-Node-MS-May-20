//Adding env variable in programm

//get process object and set variable

process.env.mode = "Dev";
//process.env.port = 8080;
const port  = process.env.port || 9090
console.log(process.env.mode)
console.log(port)