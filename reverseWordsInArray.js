// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
    const newArr = str.split('').reverse().join('').split(' ').reverse().join(' ');
    return newArr
  }
  
  // use split to make an array of the characters, reverse to reverse it, then join to make it back into a string.  
  
//   then split again, this time with ' ' to seperate the words, then reverse it and join again with ' ' to make a string with spaces between the objects
  
  reverseWords('The quick brown fox jumps over the lazy dog.')

  // using map

  function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }