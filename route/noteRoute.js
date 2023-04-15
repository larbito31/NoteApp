import express from 'express';
import {getAllnotes} from '../controller/noteController.js';
import {saveNote} from '../controller/noteController.js';
import {updateNote} from '../controller/noteController.js';
import {deleteNote} from '../controller/noteController.js';

const router = express.Router();



// define the home page route
router.get('/notes', getAllnotes)
router.post('/notes/save', getAllnotes)
router.get('/notes/update', getAllnotes)
router.delete('/notes/delete', getAllnotes)

  export default router;

