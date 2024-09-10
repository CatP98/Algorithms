/* fromFacebook2.js*/
function bracketsCheck(string){
    var arrayOfBrackets = [];
    for (var j = 0; j < string.length; j++){
        if (string[j] === "(" || string[j] === ")" || string[j] === "[" || string[j] === "]" || string[j] === "{" || string[j] === "}" ){
            arrayOfBrackets.push(string[j]);
        }
    }
    if (arrayOfBrackets.length % 2 === 0 || arrayOfBrackets.length === 0){
        console.log(arrayOfBrackets.length);
        return true;
    }else{
        console.log(arrayOfBrackets.length);
        return false;
    }
}

var test1 = "()";
var test2 = "{[()]}";
var test3 = "{[()]";
var test4 = "{[()]}}";
var test5 = "{[()]";

console.log(bracketsCheck(test1));
console.log(bracketsCheck(test2));
console.log(bracketsCheck(test3));
console.log(bracketsCheck(test4));
console.log(bracketsCheck(test5));
