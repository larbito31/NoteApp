import generator from '../Util/generator.js';
import * as memStorage from '../Util/memory.storage.js';
import Note from '../model/note.model.js';

export function getAllnotes(req, res) {
  //res.send('get all Notes :,,,,,,,,Keys ,,,,,,, ');
  var values = memStorage.getValues(memStorage.store);
  console.log('Values ..........: ' + JSON.stringify(values));
  return res.status(200).send(JSON.stringify(values) )
}

export function saveNote(req, res) {
  var seqId   = generator.generate();
  var createdBy = 'admin';
  var createdOn = new Date().getFullYear();
  var title =  req.body.title;
  var content = req.body.content;

  if (!title || !content  ) {
    return res.status(500).send({error: "Titel and content shouldn't be empty "})}

   var noteobj = new Note(seqId, title, content, createdBy, createdOn);
   memStorage.store.setItem(seqId, noteobj);
   return res.status(201).send('Successfully note saved ' +JSON.stringify(req.body) )
  
}


export function updateNote(req, res) {
  
 
  var createdBy = 'admin';
  var createdOn = new Date().getFullYear();
  var noteID= req.body.noteID;
  var title =  req.body.title;
  var content = req.body.content;
  if(!noteID ){
    return res.status(500).send({error: "NoteID and content shouldn't be empty "})}
  
  if (!title || !content  ) {
    return res.status(500).send({error: "Titel and content shouldn't be empty "})}

   var noteobj = new Note(noteID, title, content, createdBy, createdOn);
   memStorage.store.setItem(noteID, noteobj);
   return res.status(200).send('Successfully note Updated ' +JSON.stringify(req.body) )
}

export function deleteNote(req, res) {
  res.send('delete note .........');
}
