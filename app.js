const yargs = require('yargs');
const notes = require("./notes.js");

// Create add command
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
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  builder: {
    title: {
      describe: 'Note title to remove',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler: () => {
    notes.listNotes();
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: "Note title to read",
      demandOption: true,
      type: "string"
    }
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  }
})

yargs.parse();

