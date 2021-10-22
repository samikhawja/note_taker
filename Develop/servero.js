const express = require('express');
const path = require('path');
const app = express();
const { readFromFile, readAndAppend, writeToFile } = require('./helpers/fsUtils');
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ entended: true }));
app.use(express.static('public'))

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json')
})

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);