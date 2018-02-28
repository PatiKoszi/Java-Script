var myString = 'I\'m a probabley "the best King Ninja" at the planet'

console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.indexOf("King"));
console.log(myString.indexOf("Ninja"));// There is no Ninja in the sentence
//and the result is -1

if (myString.indexOf("Ninja") === -1){

    console.log("The word is not part of the sentence")

} else {

    console.log("the word Ninja starts at position " +
    myString.indexOf("Ninja"));
}

var string1 = "abc"
var string2 = "def"

console.log(string1 === string2);

var string1 = "abc"
var string2 = "abc"

console.log(string1 === string2);

var string1 = "abc"
var string2 = "ABC"

console.log(string1 === string2);

var string1 = "abc"
var string2 = "ABC"

console.log(string1.toLowerCase() === string2.toLowerCase());

var string1 = "abc"
var string2 = "def"

console.log(string1 < string2);//becouse "a" is before "d" in alfabet

var string1 = "abc"
var string2 = "Def"

console.log(string1 < string2); //lower case is greater then upper case









