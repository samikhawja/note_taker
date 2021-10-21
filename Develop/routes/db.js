const db = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
const uuid = require('../helpers/uuid')

db.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data)));
});

db.post('/', (req, res) => {
    console.log(req.body);
    const {title, text} = req.body;
    if (req.body) {
        const newDb = {
            title,
            text,
            text_id: uuid(),
        };
        readAndAppend(newDb, './db/db.json');
        res.join('Note added!');
    } else {
        res.error('Error with adding note!');
    }
});
module.exports = db