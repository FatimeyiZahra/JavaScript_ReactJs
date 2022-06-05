let fruit = ["apple", "banana", "tomato"];

let user = [
  {
    name: "zahra",
  },
  {
    name: "farida",
  },
  {
    name: "gulnara",
  },
];
let activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];

// arrayin icindeki herbir elementi gaytarir
for (i = 0; i <= fruit.length; i++) {
  console.log(fruit[i]);
}

// arrayi stringe cevirir
console.log(fruit.toString());

const newFruit = "graphes";

fruit.push(newFruit); // arrayin sonuna yeni element elave edir. Evveline elave etmek ucun ise unshift()

console.log(fruit);

// arrayin her bir elemenleri arasina bir sey tetbig etmek isteyende
console.log(fruit.join(" and "));

// arrayin axirinci elementini goturmek ucun. Yeni axirinci elementi cixardir. shift() ise ilk elementi cixardir
let lastElem = activities.pop(); // user.pop() fruit.pop()
console.log("last elem", lastElem);

// delete fruit[0] olanda 0-cini silir.

//arrayin icinde her bir eleemnt ucun axtaris edir ve x inci indexi y olanlari geri gaytarir
const result = fruit.filter((item) => item.charAt(0) === "a");
console.log("result", result);

//arrayin icinde axtaris edirik. fruitsin herbir itemine baxir ve icinde b olanlari geri gaytarir
let fruits = fruit;
let enteredLetter = "b";
fruits = fruits.filter((item) => {
  const includes = item.toLowerCase().includes(enteredLetter.toLowerCase());
  if (includes) {
    return includes;
  } else return null;
});
console.log(fruits);

let removedFruit = fruit;
// ! isaresi goydug deye icinde b olmayanlari gaytaracag
removedFruit = removedFruit.filter((item) => {
  const includes = !item.toLowerCase().includes(enteredLetter.toLowerCase());
  if (includes) {
    return includes;
  } else return null;
});
console.log(removedFruit);

// arrayin icinde eger bize gonderilen deyer varsa onda onu silib , arrayi geri gaytarir
const deleteUser = (us) => {
  let deleted = user.filter((item) => item.name != us);
  console.log("deleted", deleted);
};
deleteUser("zahra");

//arrayin icinden deyeri olmayan seyleri cixarmag ucun:
const array = [34, 43, null, 0, NaN, "", undefined, false, 100, "zxczx"];

const filterArray = array.filter(Boolean);
console.log("filterArray", filterArray);

//output  ==> filterArray  [ 34, 43, 100, 'zxczx' ]

// arrayin icinden tesadufi olaraq bir elementi secmek ucun:
let randomElement = Math.floor(Math.random() * fruit.length);
console.log("random element from array => ", fruit[randomElement]);

// arrayin icindeki stringlerin basherfinin boyuk olmasi ucun:
const upperCaseArray = fruit.map((item) => {
  return item[0].toUpperCase() + item.slice(1);
});
console.log("upperCaseArray", upperCaseArray);

//arrayin icinden max ve min valueni goturmek ucun
const numArray = [1, 435, 34, 23, 2, 3, 12, 12, 3];
console.log(Math.max(...numArray)); //Math.min(...numArray)

// dublicat olanlari arrayin icinden silmek ucun:
const removeDublicate = (arr) => [...new Set(arr)];
console.log(removeDublicate([1, 1, 2, 3, 34, 35, 35]));

//basga yol:
const uniqueArr = [...new Set(numArray)];
console.log(uniqueArr);
