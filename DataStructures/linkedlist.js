class Node {
  constructor(value, prev, next) {
    this.value = value
    this.prev = prev || null
    this.next = next || null
  }

  getValue() {
    return this.value
  }

  getNext() {
    return this.next
  }

  getPrev() {
    return this.prev
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null
  }
  //append - add to end of list
  append(value) {
    if (!this.tail) {
      this.head = this.tail = new Node(value)
    } else {
      let prevTail = this.tail
      this.tail = new Node(value)
      prevTail.next = this.tail
      this.tail.prev = prevTail
    }
  }
  //prepend - add to beginning of the list
  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value)
    } else {
      let prevHead = this.head
      this.head = new Node(value)
      prevHead.prev = this.head
      this.head.next = prevHead
    }
  }

  //delete head
  // catch no head cases
  // if theres only one node
  // set it to null
  //  else
  //  set the head to the next node
  //  set prev to null

  deleteHead() {
    if (!this.head) {
      return null
    } else {
      let removeHead = this.head

      if (this.head === this.tail) {
        this.head = this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
      return removeHead.value
    }
  }

  //delete tail

  //search
}

let list = new LinkedList();

list.append(1)
list.append(2)
list.append(3)
list.append(4)

list.append(0)
list.append(-1)

list.deleteHead()

console.log(list)
