// Stacks! (Palindrome ex.)
//i.e. Stack of books or the browser's back button
// functions: push, pop, peek, length
// Arrays act like stacks

let letters = [];

let word = "racecar";

let revWord = "";

// Push - put letters of word in stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// Pop - pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  revWord += letters.pop();
}

// Checking to see if word is a palindrome
if (word === revWord) {
  console.log(`${word} is a Palindrome!!`)
} else {
  console.log(`${word} is not a plaindrome :(`)
};

// Stacks! (Non-array)

class Stack {
  constructor() {
    this.items = []
    this.count = 0
  }
  // Add an element to top of stack
  push(element) {
    this.items[this.count] = element
    this.count++
    console.log(`${element} added to ${this.count}`)
    // console.log(this.items)

    return this.count - 1
  }

  // Removes an element from top of stack
  // Return undefined if empty
  pop() {
    if (this.count === 0) return undefined
    let deleteItem = this.items[this.count - 1]
    this.count--
    this.items = this.items.splice(0, this.count)
    console.log(`${deleteItem} is removed`)
    // console.log(this.items)

    return deleteItem
  }

  // Check top element in Stack
  peek() {
    if (this.count === 0) return undefined
    let topItem = this.items[this.count - 1]
    console.log(`${topItem} IS ON TOP!`)
    // console.log(this.items)
    return topItem
  }

  // Check to see if Stack is empty
  isEmpty() {
    console.log(this.count == 0 ? `The stack is empty` : `There's atleast something in the stack`)
    return this.count == 0
  }

  //Check the size of the stack
  size() {
    console.log(`------${this.count} in the stack!---------`)
    return this.count
  }

  //Print out all of the items in the stack
  print() {
    let str = ''
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + ' | '
    }
    return str
  }

  //Clear stack
  clear() {
    this.item = []
    this.count = 0
    console.log(`Stack is as clear as crystal`)
    return this.items
  }
}

const stack = new Stack()

stack.isEmpty()

stack.push(11)
stack.push(22)
stack.push(33)

console.log(stack.print())

stack.push(44)
stack.push(55)

stack.size()

stack.pop()
stack.pop()
stack.pop()
stack.size()
stack.pop()

stack.clear()
console.log(stack.print())


stack.peek()

stack.isEmpty()