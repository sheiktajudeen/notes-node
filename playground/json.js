// var obj = {
//   name:'Sheik'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// var person = '{"name":"Sheik","age":32}';
// var personObj = JSON.parse(person);
// console.log(personObj.name);
// console.log(typeof personObj);
// console.log(personObj.age);
// console.log(personObj);
const fs = require('fs');
var originalNote = {
  title:'some title',
  body:'some body'
};

var orginalNoteString = JSON.stringify(originalNote);
console.log(typeof orginalNoteString);
console.log(orginalNoteString);
fs.writeFileSync('notes.json',orginalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);
