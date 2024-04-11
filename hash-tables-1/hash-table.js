const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0
    this.data = new Array(numBuckets).fill(null)
    this.capacity = numBuckets
  }

  hash(key) {
    let hashed = sha256(key).toString(); // Convert the hash to a string
    // Parse the first 8 characters of the hash as an integer
    return parseInt(hashed.substr(0, 8), 16);
  };

  hashMod(key) {
    return this.hash(key) % this.capacity
  }

  insertNoCollisions(key, value) {
   //let table = new HashTable(key, value)

    let index  = this.hash(key)

    this.table[index].push([key, value])
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;