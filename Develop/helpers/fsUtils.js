// const uuid = require('uuid');
const fs = require('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

// class Helpers {
//   addNote(data) {
//     const { title, text } = data;
//     const newNote = { title, text, id: uuid };
//     return this.getNotes()
//     .then((notes => [...notes, newNote])
//     .then(updatedNotes => writeToFile(updatedNotes))
//     .then(() => newNote));
//   }
// }
module.exports = { readFromFile, writeToFile, readAndAppend };
