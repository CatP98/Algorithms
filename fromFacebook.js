/*fromFacebook.js */
function bracketsBalance(string){
    if(string.length % 2 === 0){
        return true;
    } else {
        return false;
    }
}
// but what if there are other characters in the srring, besides the brackets?? 
// it doesn't work..   But the instructions only talk about a string of brackets 
// "Given a string of (round, curly, and square open and closing) brackets," 


//Is it good practice to create the variable only after it is created 
//inside the second function, 
//eventhough it was already mentioned inside the first function? I would prefer to have it 
// inside the function, since it will only be necessary to have it when the function is
// in use.


//var bracketsArray = [];
function excludeFromString(bracketIndex){
    string.slice(bracketIndex);
}


function countingBrackets(string){
    
 for (var j= 0; j < string.length; j++){
    
    if (string[j] === "(" || string[j] === "[" || string[j] === "{" || string[j] === ")" || string[j] === "}" || string[j] === "]" ){
        //var refBracket = string[j];
        //pushToArray(refBracket);
        excludeFromString(j);

        for (var i = 0; i < string.length; i++){
            var twinBracket = string[i];

            switch (refBracket){
                case "(" :
                    if (twinBracket === ")"){
                        //pushToArray(twinBracket);
                        excludeFromString(i);
                    }
                    break;
                case "[" :
                    if(twinBracket === "]"){
                        //pushToArray(twinBracket);
                        excludeFromString(i);
                    }
                    break;
                case "{" :
                    if(twinBracket === "}"){
                        //pushToArray(twinBracket);
                        excludeFromString(i);
                    }
                    break;
                case ")" :
                    if(twinBracket === "("){
                        //pushToArray(twinBracket);
                        excludeFromString(i);
                    }
                        break;
                case "]" :
                    if(twinBracket === "["){
                        //pushToArray(twinBracket);
                        excludeFromString(i);
                    }
                    break;
                case "}" :
                    if(twinBracket === "{"){
                        //pushToArray(twinBracket);
                        excludeFromString(i);
                    }
                    break;
                default :
                        break;
                    }
            }
        }
    }
    
    //if (bracketsArray.length % 2 === 0 || bracketsArray.length === 0){
    //    console.log(bracketsArray.length);
    //    return true;
    //    
    // } else {
    //    console.log(bracketsArray.length);
    //    return false;
    // }

    if(excludeFromString.length % 2 ===0 || excludeFromString.length ===0){
        console.log(excludeFromString.length);
        return true;
    } else {
        console.log(excludeFromString);
        return false;
    }

 }
 

 function pushToArray(bracket){
    bracketsArray.push(bracket);
};

var test1 = "()";
var test2 = "{[()]}";
var test3 = "{[()]";
var test4 = "{[()]}}";
var test5 = "{[()]";

console.log(countingBrackets(test1));
console.log(countingBrackets(test2));
console.log(countingBrackets(test3));
console.log(countingBrackets(test4));
console.log(countingBrackets(test5));


var str = "(({}))"
var newstr = str.slice(1,2) + str.slice(4,5);
console.log(newstr);