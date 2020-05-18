// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

//Solution 1 SRJ
function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log('Reverse of house is '+ reverseString("house"))
console.log('Reverse of house is ' + reverseString("peace"))

//Solution 2 Use of spread operator iterable array or string
function reverseString2(str) {
  return [...str].reverse().join('');  
}

console.log('Reverse of giraffe is ' + reverseString2("giraffe"))
console.log('Reverse of skylight is ' + reverseString2( "skylight"))

//Solution 3 for loop decrementing
function reverseString3(str) {
  let revString = [];
  for(let i = 0; i <= str.length - 1; i++) {
    revString = str[i] + revString;
  }
  return revString;
}

console.log('Reverse of global is ' + reverseString3("global"))
console.log('Reverse of starbucks is '+ reverseString3( "starbucks"))

//Solution 4 for ... of method
  function reverseString4(str) {
  let revString = [];
  for(let char of str) {
    revString = char + revString;
  }
  return revString;
  }

  console.log('Reverse of peace is ' + reverseString4("peace"))
  console.log('Reverse of travel is ' + reverseString4("travel"))

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

//Solution 1 - SRJ
function isPalindrome(str) {
  let revString = str.split('').reverse().join('');
  return revString === str;
}

console.log(
  'Is racecar a palindrome? ' + isPalindrome("racecar")
)

console.log(
  'Is hello a palindrome? ' + isPalindrome("hello")
)

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

//Solution 1
function reverseInt(int) {
  revString = int.toString().split('').reverse().join('');
  return parseInt(revString) * Math.sign(int);
}

console.log('Reverse of -2687 is ' + reverseInt(-2687))
console.log('Reverse of 503 is ' +reverseInt(503))

// //Solution 2
   function reverseIntdos(int) {
    revString = [...int.toString()].reverse().join('');
   return parseInt(revString) * Math.sign(int)
   }
console.log('Reverse of 4321 is ' + reverseIntdos(4321))
console.log('Reverse of 6789 is ' + reverseIntdos(6789))

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

//Solution 1 For Loop
function capitalizeLetters(str) {
 const strArr = str.toLowerCase().split(' ');

  for(let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(' ');
}

console.log(capitalizeLetters('i love javascript'))

//Solution 2 Map -Higher Order Function
function capitalizeLetters2(str) {
return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}

console.log(capitalizeLetters2('we da best!'))

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

// Solution 1 - Use an object as a map. For in to loop throug object instead of array
function maxCharacter(str) {
  let charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char) {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for(let char in charMap) {
    // debugger;
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log('The maximum character appearing in javascript is ' + ' " ' + maxCharacter('javascript') + ' " ')

// Solution 2

function maxCharacter2(str) {
 var max = 0,
     maxChar = '';
  str.split('').forEach(function(char){
    if(str.split(char).length > max) {
        max = str.split(char).length;
        maxChar = char;
     }
  });
  return maxChar;
};

console.log('The maximum character appearing in javascript is ' + ' " ' + maxCharacter2('entrepreneur') + ' " ')

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

//Solution 1

// function fizzBuzz() {
//   for(let i = 1; i <= 100; i++) {
//     if(i % 3 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if(i % 3 === 0) {
//       console.log('Fizz');
//     } else if(i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// console.log(fizzBuzz())

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) {
      output += 'Fizz';
    }
    if (i % 5 === 0) {
      output += 'Buzz';
    }
    if (output === '') {
      output = i;
    }
    console.log(output);
  }
}

fizzBuzz()