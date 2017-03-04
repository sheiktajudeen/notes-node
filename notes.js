const fs = require('fs');

var fetchNotes = () => {
  try{
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch(e){
    return [];
  }
};
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
var addNote = (title,body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  }
  var duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length === 0)
  {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var readNotes = fetchNotes();
  var readNote = readNotes.filter((note) => note.title === title);
  if(readNote.length > 0){
    return readNote[0];
  }
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var newNotes = notes.filter((note) => note.title !== title);
  saveNotes(newNotes);
  return notes.length !== newNotes.length
};

var logNote = (note) => {
  // debugger;
  console.log('--');
  console.log(`Title is ${note.title}`);
  console.log(`Body is ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
