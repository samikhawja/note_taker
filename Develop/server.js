const express = require('express');
const path = require('path');
const { readFromFile, readAndAppend, writeToFile } = require('./helpers/fsUtils');
const { v4: uuid } = require('uuid');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
    console.info('get request for notes');
    readFromFile('./db/db.json').then((data) => {
        res.json(JSON.parse(data));
    })
});

app.post('/api/notes', (req, res) => {
    console.log(req.body);
    const {title, text} = req.body;
    if (req.body) {
        const newDb = {
            "title": title,
            "text": text,
            "id": uuid(),
        };
        readAndAppend(newDb, './db/db.json');
        res.join('Note added!');
    } else {
        res.error('Error with adding note!');
    }
});

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);