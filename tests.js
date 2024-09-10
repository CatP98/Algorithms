/*tests.js*/import * as algorithms from "./interviewAlgorithms.js";


/* Sorting Algorithms tests */
var emptyArray = [];
var singleElementArray = [42];
var sortedArray = [1, 2, 3, 4, 5];
var reverseSortedArray = [5, 4, 3, 2, 1];

// Insertion sort
console.log(algorithms.insertionSort(emptyArray));
console.log(algorithms.insertionSort(singleElementArray));
console.log(algorithms.insertionSort(sortedArray));
console.log(algorithms.insertionSort(reverseSortedArray));

// Insertion sort using label
console.log(algorithms.insertionSortLabel(emptyArray));
console.log(algorithms.insertionSortLabel(singleElementArray));
console.log(algorithms.insertionSortLabel(sortedArray));
console.log(algorithms.insertionSortLabel(reverseSortedArray));

// Selection sort
console.log(algorithms.selectionSort(emptyArray));
console.log(algorithms.selectionSort(singleElementArray));
console.log(algorithms.selectionSort(sortedArray));
console.log(algorithms.selectionSort(reverseSortedArray));

/* From Google tests */

// Normal case
console.log(algorithms.twoNumbersAddUp([], 10));
console.log(algorithms.twoNumbersAddUp([5], 5));
console.log(algorithms.twoNumbersAddUp([-5, 2, -8, 6], -3));
console.log(algorithms.twoNumbersAddUp([1.5, 2.5, 3.5], 4));
console.log(algorithms.twoNumbersAddUp([4, 6, 4, 2], 8));
console.log(algorithms.twoNumbersAddUp([1, 2, 3, 4], 10));

// Bonus
console.log(algorithms.twoNumbersAddUpOptimized([], 10));
console.log(algorithms.twoNumbersAddUpOptimized([5], 5));
console.log(algorithms.twoNumbersAddUpOptimized([-5, 2, -8, 6], -3));
console.log(algorithms.twoNumbersAddUpOptimized([1.5, 2.5, 3.5], 4));
console.log(algorithms.twoNumbersAddUpOptimized([4, 6, 4, 2], 8));
console.log(algorithms.twoNumbersAddUpOptimized([1, 2, 3, 4], 10));

/* From Amazon tests */

// Encoding strings
console.log(algorithms.encodingStrings(""));
console.log(algorithms.encodingStrings("a"));
console.log(algorithms.encodingStrings("acbcba"));
console.log(algorithms.encodingStrings("@##$$%"));
console.log(algorithms.encodingStrings("aa   bbbcc"));
console.log(algorithms.encodingStrings("aAaBBb"));

// Decoding Strings
console.log(algorithms.decodingStrings(""));
console.log(algorithms.decodingStrings("1a"));
console.log(algorithms.decodingStrings("1a1c1b1c1b1a"));
console.log(algorithms.decodingStrings("1@2#2$1%"));
console.log(algorithms.decodingStrings("2a3 3b2c"));
console.log(algorithms.decodingStrings("1a1A1a2B1b"));

/* From Facebook */
console.log(algorithms.areBracketsBalanced("()"));
console.log(algorithms.areBracketsBalanced("{[()]}"));
console.log(algorithms.areBracketsBalanced("{[()]"));
console.log(algorithms.areBracketsBalanced("{[()]}}"));
console.log(algorithms.areBracketsBalanced("{[()]"));
