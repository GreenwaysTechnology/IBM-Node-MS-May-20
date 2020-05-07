//import os module
const {arch,cpus} = require('os');  //load from node_modules folder
const {findAll} = require('./services/TodoService') //load from current project dir

//os system information

const { log } = console;

log('os information')
log(arch())
log(cpus())