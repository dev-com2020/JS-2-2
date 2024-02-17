const fs = require('fs');

// Funkcja do dodawania notatki
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find((note) => note.title === title);

    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('Nowa notatka dodana.');
    } else {
        console.log('Notatka o tym tytule już istnieje!');
    }
};

// Funkcja do zapisywania notatek do pliku JSON
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

// Funkcja do wczytywania notatek z pliku JSON
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

// Funkcja do wyświetlania listy notatek
const listNotes = () => {
    const notes = loadNotes();
    console.log('Twoje notatki:');
    notes.forEach((note) => {
        console.log(note.title);
    });
};

// Logika do obsługi argumentów
const command = process.argv[2];

if (command === 'ADD') {
    const title = process.argv[3];
    const body = process.argv[4];
    addNote(title, body);
} else if (command === 'LIST') {
    listNotes();
}

module.exports = {
    addNote: addNote,
    listNotes: listNotes
};
