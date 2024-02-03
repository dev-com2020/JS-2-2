console.log('Start aplikacji');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
// fs.appendFileSync('user1.txt','Witaj ' + user.username + "!");
fs.appendFileSync('user2.txt',`Witaj ${user.username} !`);

console.log(user.username);