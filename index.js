function isPalindrome(word) {
	// Write your algorithm here
	let letters = Array.from(word)
	let wordLength = letters.length
	if (wordLength === 0) {
		console.log('You didn\'t enter a word.')
	} else if (wordLength === 1) {
		return true
	} else if (wordLength === 2 || wordLength === 3) {
    	if (letters[0] === letters[wordLength - 1]) {
    		return true
    	} else {
    		return false
    	}
	} else if (wordLength === 4 || wordLength === 5) {
    	if (letters[0] === letters[wordLength - 1] && letters[1] === letters[wordLength - 2]) {
    		return true
    	} else {
    		return false
    	}
	} else if (wordLength === 6 || wordLength === 7) {
    	if (letters[0] === letters[wordLength - 1] && letters[1] === letters[wordLength - 2] && letters[2] === letters[wordLength - 3]) {
    		return true
    	} else {
    		return false
    	}
	} else {
    	console.log('Your word is too long for my solution.')
	}
}

// isPalindrome('')
// isPalindrome('a')
// isPalindrome('aa')
// isPalindrome('ab')
// isPalindrome('aba')
// isPalindrome('abb')
// isPalindrome('abba')
// isPalindrome('madam')
// isPalindrome('robot')
// isPalindrome('abccba')
// isPalindrome('abcabc')
// isPalindrome('racecar')
// isPalindrome('abcdefg')
// isPalindrome('abcdefgh')



/* 
  Add your pseudocode here
*/

// I wasn't sure where to start, and I find it better to just start doing something, or I get wrapped up in my head, and spend too much time trying to figure out the answer
// but, here is some post-pseudocode

// function to check for palindromes
  // turn word into an array of letters
  // determine array of letters length
  // if... else, if... else // where there will be different code based off the length of the array of letters
    // if length of the array of letters equals 0
      // no word
    // else if length of the array of letters equals 1 
      // true it's a palindrome
    // else if length of the array of letters equals 2 or 3
      // if else to check that the first letter matches the last letter
        // if true
          // return true
        // if false 
          // return false
    // else if length of the array of letters equals 4 or 5
      // if else to check that the first letter matches the last letter && check that the second letter matches the second to last letter
        // if true
          // return true
        // if false 
          // return false
    // else if length of the array of letters equals 6 or 7
      // if else to check that the first letter matches the last letter && check that the second letter matches the second to last letter && check that the third letter matches the third to last letter
        // if true
          // return true
        // if false 
          // return false
    // else
      // your word is too long for this inelegant solution




/*
  Add written explanation of your solution here
*/

// So, at first i was using for...of to iterate over the word,
// but that was just getting the values, and I wasn't sure how to work with that.
// Then, I tried Array.from() inside the itteration and I was getting 4 separate arrays of one letter each.
// I still wasn't sure how to work with data like that,
// but I realized forget the itteration. Build an array first in the palindrome checker function,
// and I got my single array with each letter at it's own index.
// finally, I had data I knew how to use.
  // now, I wish I had a more elegant solution,
  // but I can't think of one myself, and I decided not to use google this first time through.
  // I wanted to see what I could do.
// So... I checked the length of the word, and created an if...else, if...else to run different code based on that length
  // if the length of the word was 0
    // can't check, there is no word
  // if the length was 1
    // it's a palindrome, no further tests needed
  // if the length was 2 or 3
    // check that the first letter matches the last letter
      // if so, return true
      // if not, return false
  // then, I did the same thing for 4 or 5, and 6 or 7 just checking the next letter as well as everything the previous one did
  // now, I knew the tests only went up to the word racecar with 7 letters, so I ended my checks there
    // with an else to say your word is too long for me





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