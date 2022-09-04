import express from 'express'

import { DB_URL } from '../config';

require("express-async-errors");


import mongoose from 'mongoose';
import {
    ToDoDocumentModel,
} from '../models/mongo-models';
const cors = require('cors');

const app = express();
const DIST_DIR = __dirname;

app.use(express.static(DIST_DIR))
app.use(cors());
app.use(express.json());

mongoose.connect(DB_URL, { useNewUrlParser: true });

const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', DB_URL)
})

db.on('error', err => {
    console.error('connection error:', err)
});

app.post('/listupdate/:id', async(req, res) => {
    const newlist = req.body;
    const id = req.params.id;
    const todolist = await ToDoDocumentModel.findOneAndUpdate({ _id: id }, {
        ...todolist,
        ...newlist,
    });
    res.statusCode = 200;
});

app.post('/addtolist', async(req, res) => {
    const newlist = req.body;
    console.log("new list ", newlist);
    var newTODO = new ToDoDocumentModel(newlist);
    newTODO.save();
    res.statusCode = 200;
});


app.get('/getToDoList', async(req, res) => {
    const queryResult = await ToDoDocumentModel.find().exec();
    res.status = 200;
    res.json(queryResult);
});



app.post('/deletetodo/:id', async(req, res) => {
    const id = req.params.id;
    console.log('------ request received at endpoint /deletemeeting');
    ToDoDocumentModel.findOneAndRemove({ _id: id }).exec() // executes
    console.log("deleted meeting with key", req.params.meetingid);
});

app.post('/deletedone', async(req, res) => {
    ToDoDocumentModel.deleteMany({ Status: "Done" }).exec() // executes
});

app.post('/deleteall', async(req, res) => {
    ToDoDocumentModel.deleteMany({}).exec() // executes
});

const PORT = 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
});