console.log('Start aplikacji');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const yargs = require('yargs');

const argv = yargs.argv;
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
}).command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        console.log('Listing all notes');
        notes.listNotes();
    }
}).help().argv;