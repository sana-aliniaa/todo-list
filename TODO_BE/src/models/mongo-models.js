import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ToDoCollectionSchema = new Schema({
    Title: String,
    Status: String,
    _id: String,
});

export const ToDoDocumentModel = mongoose.model('ToDoDocumentModel', ToDoCollectionSchema, 'TODO_List');