const hash = (key, size) => {
  let hashedKey = 0

  for (let i = 0; i < key.length; i++) {
    hashedKey = key.charCodeAt(i)
  }
  return haskedKey % size
}

class HashTable {
  constructor() {
    this.size = 20
    this.buckets = Array(this.size)

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map()
    }
  }
  //Takes in key and value
  //Hash the key
  //access the bucket at the index
  insert() {

  }
  //takes in key
  //hash the key
  //store the value to be deleted as a variable
  //actually delete item
  //return deleted
  remove() {

  }
  //takes in key
  //hash the key
  //see if value in the bucket
  //if so, return value
  //else return null
  search() {

  }
}