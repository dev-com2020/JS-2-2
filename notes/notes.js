console.log('Startuje z notes.js');

module.exports.addNote = (title,body) => {
    console.log('Dodano notatke: ', title, body);
};

module.exports.add = (a,b) => {
    return console.log(a + b);
};

module.exports.age = 30;