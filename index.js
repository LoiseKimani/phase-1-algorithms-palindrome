const reversedWord = reverse(word);

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}



function isPalindrome(word) {
 
  return word.split("").reverse().join("");

}

function reverse(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  return word === reversedWord;
}