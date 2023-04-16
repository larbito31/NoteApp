import MemoryStorage from 'memorystorage'

// here, the MemoryStorage function is available
const myStorage = new MemoryStorage('note-app');

var store = MemoryStorage('my-store');
var global = MemoryStorage();

console.log(store.id); // alerts 'my-store'
console.log(global.id); // alerts 'global'


export const getKeys = (store) => {
var keys = []
    for (var i=0; i<store.length; i++) {
        var key = store.key(i);
        keys.push(key);
    }
return keys;
}


export const getValues = (store) => {
    var values = []
        for (var i=0; i<store.length; i++) {
            var key =store.key(i);
            var value = store.getItem(key);
            values.push(value);
        }
    return values;
    }

