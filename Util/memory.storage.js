import MemoryStorage from 'memorystorage';

export const store = new MemoryStorage('note-app');

// export const store = myStorage;
// var global = MemoryStorage();
// console.log(store.id); // alerts 'note-app'
// console.log(global.id); // alerts 'global'

export const getKeys = () => {
  var keys = [];
  for (var i=0; i<store.length; i++) {
    var key = store.key(i);
    keys.push(key);
  }
  return keys;
};

export const getValues = () => {
  var values = [];
  for (var i=0; i<store.length; i++) {
    var key = store.key(i);
    var value = store.getItem(key);
    values.push(value);
  }
  return values;
};

