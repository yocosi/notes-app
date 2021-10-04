const fs = require("fs");
const chalk = require("chalk");

// Add a new note to the notes.json folder
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => {
    return note.title === title;
  })

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
}

// Remove a note from the notes.json if the title match
const removeNote = (title) => {
  const notes = loadNotes();
  const removeMatchingNotes = notes.filter((note) => {
    return note.title !== title;
  })

  if (removeMatchingNotes.length < notes.length) {
    saveNotes(removeMatchingNotes);
    console.log(chalk.bgGreen("Note removed!"));
  } else {
    console.log(chalk.bgRed("No note found!"));
  }
}

// List all the notes who are inside notes.json
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgBlue("Your notes"));
  notes.forEach(element => {
    console.log(element.title);
  });
}

// Read a note from notes.json if the title match
const readNote = (title) => {
  const notes = loadNotes();
  const findNote = notes.find((note) => {
    return note.title === title;
  })
  if (findNote) {
    console.log(chalk.bgBlue(title));
    console.log(findNote.body);
  } else {
    console.log(chalk.red("No note found!"));
  }
}

// This function is called to save the notes in notes.json
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

// Read and return all the notes from the notes.json file
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}