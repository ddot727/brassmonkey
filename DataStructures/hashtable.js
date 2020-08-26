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

  insert() {

  }

  remove() {

  }

  search() {

  }
}