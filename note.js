// note.js - Your Note model
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  noteId: { type: String, required: true }, // Add a noteId field
  title: { type: String, required: true },
  content: { type: String },
  // other fields...
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
