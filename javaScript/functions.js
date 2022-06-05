// funskiyanin cagrilma yerinin fergi yoxdur. ozunden evveldede cagirlsa isleyir.
function count(x, y) {
  return x + y;
}
console.log("count", count(2, 3));

//arrow functions, fat arrowda deyilir. Funksiya return olaraq bir sey gaytarir ve onu bir deyiskene menimsedirik. arrow funcktipnu yaradandan sonra cagirmag lazimdi
const getUser = (name, surname) => {
  console.log("name is", name, "surname is", surname);
};
getUser("zahra", "Sharifova");

//eger funksiya hec bir deyeri almirsa onda _ yazmag olar () bunun yerine
const user = (_) => {
  console.log("first");
};
user();

// eger return olarak bir setrlik kod yazilacagsa ve bir dene deyer gonderilirse onda qisaca asagidaki kimide yazmag olar
let year = 2022;
const getYear = age => console.log(year - age);
getYear(24);

// eger birden cox deyer alacagsa onda (x,y, ...) moterizenin daxilinde yazmag lazimdir.