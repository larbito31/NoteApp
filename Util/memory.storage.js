import MemoryStorage from 'memorystorage';

const myStorage = new MemoryStorage('note-app');

export const store = myStorage;
// var global = MemoryStorage();
// console.log(store.id); // alerts 'note-app'
// console.log(global.id); // alerts 'global'

export const getKeys = () => {
  var keys = [];
  for (var i=0; i<myStorage.length; i++) {
    var key = myStorage.key(i);
    keys.push(key);
  }
  return keys;
};

export const getValues = () => {
  var values = [];
  for (var i=0; i<myStorage.length; i++) {
    var key = myStorage.key(i);
    var value = myStorage.getItem(key);
    values.push(value);
  }
  return values;
};

