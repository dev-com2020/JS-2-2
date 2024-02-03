console.log('Start aplikacji');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

console.log(process.argv);
var command = process.argv[2];
console.log('Command:', command);

if (command === 'add') {
    console.log("Dodaj informacje");
} else if (command === 'list') {
    console.log('Lista komunikatow');
} else {
    console.log('Komenda nie jest rozpoznana');
}
