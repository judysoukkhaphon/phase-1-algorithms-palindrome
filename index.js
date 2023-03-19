// This function takes a string, reverses the string and stores it in a variable, then compares the string and its reverse.
function isPalindrome(word) {
  // Write your algorithm here
  let isPal = true;
  let i = 0;
  let drow = "";        
  let len = word.length;
  let counter = 0;

  console.log("word: " + word);
  
  // define "drow", aka, word backwards
  while(counter <= len + 1){
    let letter = word.charAt((len+1) - counter);
    drow += letter;
    counter++;
  }
  console.log("drow: " + drow);

  // determine palindrome by comparing "word" to "drow"
  while (isPal === true && i <= len/2){
    if(word.charAt(i) != drow.charAt(i)){   
      isPal = false;
    }
    else{
      i++;
    }
  }
  return isPal;
}

/* 
  Add your pseudocode here:

  a possiblePalindrome is a palindrome of aString if each letter of possiblePalindrome(-i) === aString.charAt(i), until counter <= aString.length/2
  where "counter" is the amount of times "i" has been incremented/decremented

  i = -1
  length = string.length
  palindrome = ""
  stopComparison = string.length/2


  while string.charAt(i) === palindrome.charAt(-i) (until an "i" inc/decrement counter >= string.length/2)
        isPalindrome = True;
  
  return isPalindrome
  - so on each iteration, increment "i" and "counter". or stop iterating when i >= stopComparison



  **NO, I HAVE TO COMPARE THE CHARACTERS FROM BOTH ENDS OF THE STRING**
  for a string: 
    ch = string.charAt(i) 
    palindrome = palindrome + ch;
    i = i - 1;
  
  
*/

/*
  Add written explanation of your solution here
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
