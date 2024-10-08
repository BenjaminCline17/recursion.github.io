// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base
if (n === 0){
  return 1;
}
if (n < 0){
  return null;
}
  //recursion

  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, index=0) {
  //base
  //if index equals the length of array, return 0
if (index === array.length){
return 0;
}
  //recursion
//return the result of adding the next index to the current index using slice
return array[index] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays. Optional
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //base
  //if n equals 1, return false
if (n === 1){
 return false;
} //if n equals 0, return true
 if (n === 0){
  return true;
}
  //recursion
  //if n is less than 0, return isEven with negetive n
 if (n < 0){
  return isEven(-n);
 } else { //else return isEven(n - 2)
  return isEven(n - 2);
 }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base
  //if n equals 0, return n
if (n === 0){
  return n;
}
  //recursion
  //if n is greater than 0, add the the integers below n
  if (n > 0){
  return n - 1 + sumBelow(n - 1);
  } else { //else, add the integers above n
    return n + 1 + sumBelow(n + 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output=[]) {
  //base
  if (x === y){
    return [];
  }
  if (x === y - 1){
    return output;
  }
  if (x - 1 === y){
    return output;
  }
  //recursion
  if (x < y){
output.push(x + 1)

return range(x + 1, y, output)
  } else {
    output.push(x - 1);
    
    return range(x - 1, y, output);
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base
  //if exp is 0, return 1
  if (exp === 0){
    return 1;
  }
  //if exp is 1, return base
  if (exp === 1){
    return base;
  }
  //recursion
  //if exp is less than 0, return 1 divided by the exponent function with base and negative exp passed in
  if (exp < 0){
    return 1/exponent(base, -exp);
  }
    return base * exponent(base, exp -1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base
  //if n is less than or equal to 0, return false
  if (n <= 0) {
    return false;
  } //if n is equal to 1, return true
  if (n === 1) {
    return true;
  }
  //recursion
  //if the remainder of n and 2 is 0, return powerOfTwo function with n divided by 2 passed in
  if (n % 2 === 0){
    return powerOfTwo(n / 2);
  }
  return false; //return false
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //base
  //if string is empty, return an empty string
  if (string === ""){
    return "";
  }
  //recursion
  //return the reverse function with a substring of string passed added to the first character of string
  return reverse(string.substr(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //base
  string = string.replace(/\s/g, "").toLowerCase();
  //if the length of string is 1, return true
  if (string.length === 1){
    return true;
  }
  //if the length of string is 2, return the first character of string equal to the second
  if (string.length === 2){
    return string[0] === string[1];
  }
  //recursion
  if (string[0] === string.slice(-1)) {
    return palindrome(string.slice(1, -1))
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator. Optional
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
 if (y === 0) { 
  return 0;
 } 
if (y < 0){
  return -multiply(x, -y);
}

 return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator  or / Optional
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two / Optional
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base
  if(str1 === str2){
    return true;
  }
  if(str1.length === 0 || str2.length === 0){
    return false;
  }
  //recursion
  if (str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1));
  } else {
    return false;
  }

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //base
  if (str.length === 0){
    return [];
  }
  //recursion
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //base
  if (!array.length){
    return array;
  }
  //recursion
  return reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //base
  if (length <= 0){
    return [];
  }
  //recursion
    return [value].concat(buildList(value, length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //base
  if (array.length === 0){
    return 0;
  }
  //recursion
  return (array[0] === value) + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, newArray = []) {
  //base
  if(array.length <= 0){
    return newArray;
  }
  const [item, ...theRest] = array;


  const interimArray = [...newArray, callback(item)];
  //recursion
  return rMap(theRest, callback, interimArray);
};

// 21. Write a function that counts the number of times a key occurs in an object. Optional
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object. Optional
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename Optional
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent Optional
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, fib=[0, 1]) {
  //base
  if (n < 0){
    return null;
  }
 if (fib.length > n){
  return fib[n];
 }
  //recursion
 fib.push(fib[fib.length - 1] + fib[fib.length - 2]);

 return nthFibo(n, fib);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //base
  //if the input length is 1, return the first element of input being capitalized
 if(input.length === 1){
  return [input[0].toUpperCase()];
 }
  //recursion
  // let result equal a slice of the input array
 let result = capitalizeWords(input.slice(0, -1));
 //push the capitalized slice into the result
 result.push(input.slice(input.length -1)[0].toUpperCase());
 //return result
 return result;
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, index= 0) {
  //base
  if(index >= array.length){
    return array;
  }
  array[index] = array[index].charAt(0).toUpperCase() + array[index].slice(1);
  //recursion
  return capitalizeFirst(array, index + 1);
};

// 28. Return the sum of all even numbers in an object containing nested objects. Optional
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays. Optional
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  //base
  if (str.length === 0){
    return obj;
  }
  //recursion
 letterTally(str.substr(1), obj)
 if (obj[str[0]] === undefined){
  obj[str[0]] = 1;
 } else {
  obj[str[0]] += 1;
 }
return obj;
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output = []) {
  //base
 if (list.length === 0){
    return output;
 }
 if (list.length === 1){
  output.push(list[0]);
  return output;
 }
 if (list[0] !== list[1]){
  output.push(list[0])
 }
  //recursion
  return compress(list.slice(1), output);
};

// 32. Augment every element in a list with a new value where each element is an array Optional
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //base
if (array.length === 0){
  return [];
}
  //recursion
  if (array[0] === 0 && array[1] === 0){
    return minimizeZeroes(array.slice(1));
  } else {
    return [array[0], ...minimizeZeroes(array.slice(1))];
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, index = 0) {
 //base
 //if the current index is greater than array, return the whole array
  if (index >= array.length){
    return array;
  }
  //if the current element is positive and the index is even, keep the current element positive
  if (array[index] > 0 && index % 2 === 0) {
    array[index] *= 1;
    //if the current element is negative and the index is even, multiply the current by a negative to make it positive
  } else if (array[index] < 0 && index % 2 === 0){
    array[index] *= -1
    //if the current element is positive and the index is odd, set the current element to negative
  } else if (array[index] > 0 && index % 2 === 1){
    array[index] *= -1
  } else { //else keep the current element negative
    array[index] *= 1;
  }
  
 //recursion
 //return the alternateSign function while iterating through the array
return alternateSign(array, index + 1);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
 //base
 //if str.length equals 0, return an empty string
  if (str.length === 0){
    return "";
  }

  //recursion
  //declare tempStr as the numToText with a substring of str passed in
  let tempStr = numToText(str.substr(0, str.length -1));
  //declare replace
  let replace;
  //use the switch statement to replace any number in the input string with its word equivalent 
  switch(str[str.length - 1]) {
    case "1": replace = "one";
    break;
    case "2": replace = "two";
    break;
    case "3": replace = "three";
    break;
    case "4": replace = "four";
    break;
    case "5": replace = "five";
    break;
    case "6": replace = "six";
    break;
    case "7": replace = "seven";
    break;
    case "8": replace = "eight";
    break;
    case "9": replace = "nine";
    break;
    default: replace = str[str.length-1];
    break;
  }
  //return the result of changing anything numbers in the input string.
  return tempStr + replace;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
