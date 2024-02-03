console.log('Start aplikacji');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

var user = os.userInfo();
console.log(_.isString('Tomek'));
var filtered = _.uniq(['Tomek',1,1,2,3,'Adam']);
console.log(filtered);
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
// fs.appendFileSync('user1.txt','Witaj ' + user.username + "!");
// fs.appendFileSync('user2.txt',`Witaj ${user.username}, masz ${notes.age} !`);

// notes.addNote();
// notes.add(4,4);

// console.log(user.username);