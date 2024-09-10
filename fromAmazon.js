/* fromAmazon.js */
function runLengthEncode(string) {
    if (string.length <= 1) {
        return string;
    }
    //or: 
    //if (string === 0 ) {
    //  return string;
    //}
    // if (string.leth ===1){
    //   return "<character>";
    //}
    var encodedString = "";
    var count = 1;

    for (var i = 1; i <= string.length; i++) {
        if (i === string.length || string[i] !== string[i - 1]) {
            encodedString += count + string[i - 1];
            count = 1;
        } else {
            count++;
        }
    }
    return encodedString;
};


function runLengthDecode(string) {
    if (string.length <= 1) {
        return string;
    }
    var decodedString = "";

    for (var i = 0; i <= string.length; i++) {
            if (string[i]!== 1 && string[i]!== 2 && string[i]!== 3 && string[i]!== 4 && string[i]!== 4 && string[i]!== 5 && string[i]!== 6 && string[i]!== 7 && string[i]!== 8 && string[i]!==9 ) {
            decodedString += string[i];
            }
        }
        return decodedString;
    }
    

var emptyString = "";
var justOneChar = "A";
var nonConsecutiveChar = "acbcba";
var specialChar = "@##$";
var spaces = "aa   bbbcc";
var upperLower = "aAaBBb";

//Tests to encode:
console.log(runLengthEncode(emptyString));
console.log(runLengthEncode(justOneChar));
console.log(runLengthEncode(nonConsecutiveChar));
console.log(runLengthEncode(specialChar));
console.log(runLengthEncode(spaces));
console.log(runLengthEncode(upperLower));


var encodedEmptyString = runLengthEncode(emptyString);
var encodedJustOneCha = runLengthEncode(justOneChar);
var encodedNonConsecutiveChar = runLengthEncode(nonConsecutiveChar);
var encodedSpecialChar = runLengthEncode(specialChar);
var encodedSpaces = runLengthEncode(spaces);
var encodedUpperLower = runLengthEncode(upperLower)

//Tests to decode:
console.log(runLengthDecode(encodedEmptyString));
console.log(runLengthDecode(encodedJustOneCha));
console.log(runLengthDecode(encodedNonConsecutiveChar));
console.log(runLengthDecode(encodedSpecialChar));
console.log(runLengthDecode(encodedSpaces));
console.log(runLengthDecode(encodedUpperLower));

console.log("a" + 3)