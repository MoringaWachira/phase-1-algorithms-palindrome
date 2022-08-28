function reverse(word) {
 return word.split("").reverse().join("")
}


function isPalindrome(word) {
  const reversed = reverse(word)
  return word === reversed
}    

 
  
  // Write your algorithm here
  // checking if characters are the same in a string if it is reversed
  // get a string of characters in lowercase
  // if they are the same then that is a palindrome




/* 
  Add your pseudocode here
 create a variable named newWord that takes in  a split method
 reverse the array created
 use the join method to join the array
 from here compare the new word to the word and if same then return true
 if not same return false 

*/



/*
  Add written explanation of your solution here

js doesn't have a built in method for reversing an array 
spliting it makes it an array which can be reversed 


  
*/

// You can run `node index.js` to view these console logs




if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
