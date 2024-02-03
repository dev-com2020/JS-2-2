console.log('Start aplikacji');

const fs = require('fs');
const os = require('os');
const notes = require('./notes')

var user = os.userInfo();
// fs.appendFileSync('user1.txt','Witaj ' + user.username + "!");
fs.appendFileSync('user2.txt',`Witaj ${user.username} !`);

notes.addNote();
notes.add(4,4);

console.log(user.username);