import express from 'express';
const router = express.Router();


// define the home page route
router.get('/notes', (req, res) => {
    res.send('get All notes')
  })

  export default router;

