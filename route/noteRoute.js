import express from 'express';
import * as noteController from '../controller/noteController.js';

const router = express.Router();



// define the home page route
router.get('/notes', noteController.getAllnotes)
router.post('/notes/save', noteController.saveNote)
router.get('/notes/update', noteController.updateNote)
router.delete('/notes/delete', noteController.deleteNote)

  export default router;

