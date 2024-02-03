console.log('Start aplikacji');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const yargs = require('yargs');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command:', command);
console.log('Process:', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
    console.log("Dodaj informacje");
} else if (command === 'list') {
    console.log('Lista komunikatow');
} else {
    console.log('Komenda nie jest rozpoznana');
}
