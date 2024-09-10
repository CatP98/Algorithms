/*sortingAlgorithms*/
var sortedList = [];

 function insertionSort(array) {
    for(var i = 0; i < array.length; i++){
        var unsortedElement = array[i];
        var j = i - 1;
        while(j >= 0 && unsortedElement < array[j]){
            array [j + 1] = array [j];
            j--;
        }
        array[j + 1] = unsortedElement;
    }
    
    return array
}
/*
function selectionSort(array) {
    for (var j = 0; j < (array.length -1); j++){
        var smallestOfJ = array[j];
        for(var i = j + 1; i < array.length; i++){
            if(smallestOfJ > array[i]){
                array[i] = smallest;
            }
        }
        smallestOfJ = array[j];
        //j++;
    }
    return array
}
*/

function selectionSort(array){
    for(var j = 0; j < array.length; j++){
        smallestIndex = j;
        for(var i = j + 1; i < array.length; i++){
            if(array[smallestIndex] > array [i]){
                smallestIndex = i
            }
        }
        // to swap the positions of two elements in an array, you need a temporary 
        //variable to hold one of the values while you perform the swap. temp
        if(smallestIndex !== j){
            var temp = array[j];
            array[j] = array[smallestIndex];
            array[smallestIndex] = temp;
        }
    }
    return array;
} 


var emptyList = [];
var oneElementList = [1];
var sortedList = [0, 1, 2, 3, 4, 5];
var unsortedList = [100, 95, 10, -10, 32, -55, 44, 10, 33, -564];

//testing:
console.log(insertionSort(`[] once sorted by the Insertion Sorting method becomes: [${emptyList}]`))
console.log(insertionSort(`[1] once sorted by the Insertion Sorting method becomes: [${oneElementList}]`));
console.log(insertionSort(`[0, 1, 2, 3, 4, 5] once sorted by the Insertion Sorting method becomes: [${sortedList}]`));
console.log(insertionSort(`[100, 95, 10, -10, 32, -55, 44, 10, 33, -564] once sorted by the Insertion Sorting method becomes: [${unsortedList}]`));

console.log(selectionSort(`[] once sorted by the Selection Sorting method becomes: [${emptyList}]`));
console.log(selectionSort(`[1] once sorted by the Selection Sorting method becomes: [${oneElementList}]`));
console.log(selectionSort(`[0, 1, 2, 3, 4, 5] once sorted by the Selection Sorting method becomes: [${sortedList}]`));
console.log(selectionSort(`[100, 95, 10, -10, 32, -55, 44, 10, 33, -564] once sorted by the Selection Sorting method becomes: [${unsortedList}]`));

