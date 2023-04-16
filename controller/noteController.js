import generator from '../Util/generator.js'
import * as memStorage from '../Util/memory.storage.js'



export function getAllnotes(req, res) {
  var seqId   = generator.generate();
  // memStorage.store.setItem(seqId)
    res.send('get all Notes : ' + seqId  );
  }


  export function saveNote(req, res) {
    res.send('save note .........');
  }

  export function updateNote(req, res) {
    res.send('update note .........');
  }

  export function deleteNote(req, res) {
    res.send('delete note .........');
  }

