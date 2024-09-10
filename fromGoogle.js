/*fromGoogle.js*/
function findk(array, k){
    var sums = [];
    for(var j= 0; j < array.length; j++){
        if(array.length === 0){
            return false;
        }
        for (var i = j+1; i < array.length; i++){
            var sum = array[i] + array[j];
            if(sum === k){
                sums.push(`${array[j]} + ${array[i]} = ${k}`);
            }
        }  
    } if (sums.length > 0){
        console.log(sums);
        return sums
    } else {
        console.log(false);
       return false;
    }
}

var emptyList = [];
var negativeValuesList = [-5, 2, -8, 6];
var floatingPointList = [1.5, 2.5, 3.5, 4];
var moreThanOneSum = [4, 6, 4, 2];
var sumOfAllElements = [1, 2, 3, 4];

findk(emptyList, 10);
findk(negativeValuesList, -3);
findk(floatingPointList, 4);
findk(moreThanOneSum, 8);
findk(sumOfAllElements, 10);