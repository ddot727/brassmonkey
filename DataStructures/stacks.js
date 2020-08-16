// Stacks! (Palindrome ex.)
//i.e. Stack of books or the browser's back button
// functions: push, pop, peek, length
// Arrays act like stacks

var letters = [];

var word = "racecar";

var revWord = "";

// Push - put letters of word in stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// Pop - pop off the stack in reverse order
for (var = i = 0; i < word.length; i++) {
  revWord += letters.pop();
}

// Checking to see if word is a palindrome
if (word === revWord) {
  console.log(`${word} is a Palindrome!!`)
} else {
  console.log(`${word} is not a plaindrome :(`)
};