const arr = [1, 2, 3, 4];

// total-a baslangic deyer olarag 0 verdik. reduce(previous, current, index); total hemde evvelki deyerdir
const reduce = arr.reduce((total, curr) => {
  return (total = total + curr);
}, 0); //initial value - baslangic deyer
console.log(reduce); // 10

// total 0 current 1 => total 1 current 1 => total 3 current 2 => total 6 current 3 => total 10 current 4


// baslangic olarag bos array verdik. ve yazdigki herbir elementi 2 e vur ve bos arraya push et.
const vurma = arr.reduce((prev, curr) => {
  prev.push(curr * 2);
  return prev;
}, []);
console.log(vurma); //[ 2, 4, 6, 8 ]

// ilk olaraq current elementi yeni 1- i vurur 2 -e ve initial valueye elave et, daha sonra current olur 2 ve  2ni vurur 2 e ve elave edir
// arraya emeliyyat bu cur davam edir.