console.log('Start aplikacji');

const fs = require('fs');
fs.appendFileSync('powitanie.txt','Witaj z Node.js!');
