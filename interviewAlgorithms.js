//Assignment • Tech interview algorithms

//Insertion Sort
/*
	Repeat until sorted:
	Extract one element from the array
	Insert element into sorted subarray (empty for the first element)
*/

var arrayToSort = [100, 95, 10, -10, 32, -55, 44, 10, 33, -564];

export function insertionSort(array) {
  if (array.length == 0) {
    return array;
  }

  var newArray = [array[0]];

  for (var i = 1; i < array.length; i++) {
    var current = array[i];
    for (var j = 0; j < newArray.length; j++) {
      if (current < newArray[j]) {
        newArray.splice(j, 0, current);
        break;
      }
    }
    if (j === newArray.length) {
      newArray.push(current);
    }
  }
  return newArray;
}

//Insertion Sort
/* 
    Same as before but using a label
*/
export function insertionSortLabel(array) {
  if (array.length == 0) {
    return array;
  }

  var newArray = [array[0]];

  label: for (var i = 1; i < array.length; i++) {
    var current = array[i];

    for (var j = 0; j < newArray.length; j++) {
      if (current < newArray[j]) {
        newArray.splice(j, 0, current);
        continue label;
      }
    }
    newArray.push(current);
  }
  return newArray;
}

//Selection Sort
/*
	Starting on the first array position:

	for each position of the array:
	Find the smallest number on the array in a position superior to the current one.
	Swap the smallest number with the current position.
	Continue ignoring the smallest values found.
*/
export function selectionSort(array) {
  if (array.length == 0) {
    return array;
  }

  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        var x = array[i];
        var y = array[j];
        array[i] = y;
        array[j] = x;
      }
    }
  }
  return array;
}

// 2 - (from Google)
/* 
	Initialize a variable sum.
	Loop over each element in the array, using an index variable i to keep track of the current position.
	Within the first loop, loop over each element after the current position in the array, using an index variable j.
	Sum the element in the i position with the element in the j position and assign it to the sum variable.
	if the sum is equal to k, you found it, return true.
	if you finish the outer loop, you didn't find the sum that is equal to k, so return false
*/
export function twoNumbersAddUp(arr, k) {
  var sum;

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      sum = arr[i] + arr[j];

      if (sum === k) {
        return true;
      }
    }
  }

  return false;
}

// 2 - (from Google) in One-pass
/* 
	k = operand1 + operand2 <=> operand1 = k - operand2 <=>
	operand1 = k - arr[i]
	map saves the value and the position in the arr of the element
	if map has memory of that operand1, then the sum exists
	if not, save it in memory to check the next arr position
*/
export var twoNumbersAddUpOptimized = function (arr, k) {
  var map = {};

  for (var i = 0; i < arr.length; i++) {
    var operand = k - arr[i];

    if (map[operand] != undefined) {
      return true;
    }

    map[arr[i]] = i;
  }
  return false;
};

// 3 - (from Amazon)
/* 

    Initialize two variables: count to 1 and encoded to an empty string.
    Loop over each character in the string, keeping track of the current character
    If the current character is the same as the next character:
        - Increment the count variable.
        - Continue to the next iteration of the loop.
    If the current character is different from the next character:
        - Append the current count and character to the encoded string.
        - Reset the count variable to 1.
        - Continue to the next iteration of the loop.
    After the loop is finished, return the encoded string.
*/
export function encodingStrings(str) {
  var count = 1;
  var encoded = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
      continue;
    }

    encoded += count + str[i];
    count = 1;
  }
  return encoded;
}

/* 
	Initialize two variables: decoded to an empty string and repetitions to 0.
    Loop over each even character in the string, keeping track of the current character, since the string will be in a valid format.
	The character at the i position will be the number of times a i + 1 character will be repeated.
	Concat the i + 1 character i times to the decoded string.
    After the loop is finished, return the decoded string.
*/

export function decodingStrings(str) {
  var decoded = "";
  var repetitions = 0;

  for (var i = 0; i < str.length; i += 2) {
    repetitions = parseInt(str[i]);

    for (var j = 0; j < repetitions; j++) {
      decoded += str[i + 1];
    }
  }
  return decoded;
}

// 4 - (from Facebook)
/* 

    Initialize an empty array called stack.
    Loop over each character in the string, keep track of the current character.
    If the current character is an opening bracket -> (, [, or {
        - Push the character onto the stack array.
        - Continue to the next iteration of the loop.
    If the current character is a closing bracket ->  ), ], or }
        - If the stack array is empty, return false.
        - Pop the last element from the stack array and assign it to a variable so that you can compare it later.
        Depending on the current character, check if the popped character is a matching opening bracket -> ( for ), [ for ], or { for }
            - If it is not a matching opening bracket, return false.
    After the loop is finished, check if the stack array is empty:
        - If it is empty, return true (All the pairs have been found).
        - If it is not empty, return false (Not all the pairs have been found).

*/
export function areBracketsBalanced(str) {
  var stack = [];

  for (var i = 0; i < str.length; i++) {
    var elem = str[i];

    if (elem === "(" || elem === "[" || elem === "{") {
      stack.push(elem);
      continue;
    }

    if (stack.length === 0) {
      return false;
    }

    var check;

    switch (elem) {
      case ")":
        check = stack.pop();
        if (check === "{" || check === "[") {
          return false;
        }
        break;

      case "}":
        check = stack.pop();
        if (check === "(" || check === "[") {
          return false;
        }
        break;

      case "]":
        check = stack.pop();
        if (check === "(" || check === "{") {
          return false;
        }
        break;
    }
  }

  return stack.length === 0;
}
