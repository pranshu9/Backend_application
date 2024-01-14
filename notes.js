
  const express = require('express');
  const router = express.Router();
  const authenticateUser = require('./middleware_auth');
  const Note = require('./note');
  const { v4: uuidv4 } = require('uuid'); // Import the uuid library
  
  // Create a new note
  router.post('/', authenticateUser, async (req, res) => {
    try {
      const { title, content } = req.body;
      const userId = req.userId;
  
      // Generate a unique noteId using uuid
      const noteId = uuidv4();
  
      const note = new Note({ userId, noteId, title, content });
      await note.save();
  
      res.json({ 
        message: 'Note created successfully',
        note: {
          noteId: note.noteId,
          title: note.title,
          content: note.content
        }
      });
      
    } catch (error) {
      console.error('Error during note creation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Update a note
  router.put('/:noteId', authenticateUser, async (req, res) => {
    try {
      const noteId = req.params.noteId;
      const { title, content } = req.body;
      const userId = req.userId;
      await Note.findOneAndUpdate({ _id: noteId, userId }, { title, content });
      res.json({ message: 'Note updated successfully' });
      
  
    } catch (error) {
      console.error('Error during note update:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Mark a note as read or unread
  router.patch('/:noteId', authenticateUser, async (req, res) => {
    try {
      const noteId = req.params.noteId;
      const { read } = req.body;
      const userId = req.userId;
      await Note.findOneAndUpdate({ _id: noteId, userId }, { read });
      res.json({ message: 'Note updated successfully' });
    } catch (error) {
      console.error('Error during note update:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Delete a note
  router.delete('/:noteId', authenticateUser, async (req, res) => {
    try {
      const noteId = req.params.noteId;
      const userId = req.userId;
      await Note.findOneAndDelete({ _id: noteId, userId });
      res.json({ message: 'Note deleted successfully' });
    } catch (error) {
      console.error('Error during note deletion:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Search for notes
  router.get('/search', authenticateUser, async (req, res) => {
    try {
      const userId = req.userId;
      const { keyword } = req.query;
  
      const notes = await Note.find({ userId, title: { $regex: keyword, $options: 'i' } });
      res.json({ notes });
    } catch (error) {
      console.error('Error during note search:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  module.exports = router;
  