//bas herfi goturmek ucun
let nameee = "zahra";
console.log(nameee.charAt(0)); //index olar ne versek o sirada olani goturecek

//interegere cevirmek ucun stringi
let myAge = "24";

console.log(parseInt(myAge));

// stringe cevirmek ucun
let integerAge = 24;

console.log(typeof integerAge);

console.log(JSON.stringify(integerAge));

//stringi tersine cevirmek ucun
function reverseString(str) {
  console.log(str.split("").reverse().join("")); //str.split("")=> "z" "a" "h"... =>reverse=>> "a" "r" "h" "a" "z" =>>>join()=> arhaz
}
reverseString("zahra");

