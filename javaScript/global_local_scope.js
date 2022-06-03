let number = 1; //global scopdu. istenilen yerde cagirib isletmek olar
console.log(number);

function showNumber() {
  let number = 7; // local scope-dir. ancag bu funksiyanin daxilinde isleyir. Kenarda istifade etmek olmur yeni taninmir.
  var name = "zahra";
  console.log(number);
}
// console.log(name) bu islemeyecek cunki local scopeni kenarda cagirmag olmur
showNumber();
