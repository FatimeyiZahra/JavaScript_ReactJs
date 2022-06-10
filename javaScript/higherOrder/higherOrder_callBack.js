let arr = [2, 3, 4];

//first class function
const ikiyeVur = function (regem) {
  return regem * 2;
};

const ikiyeBol = function (regem) {
  return regem / 2;
};

//higher order function
const emeliyyatlar = (array, func) => {
  let element = [];
  for (let i = 0; i < array.length; i++) {
    element[i] = func(array[i]);
  }
  console.log(element);
};

emeliyyatlar(arr, ikiyeVur);
emeliyyatlar(arr, ikiyeBol);
//higher order funskiyasi parametr olaraq bir funksiya ve ya return olaraq funksiya geri gaytaran funksiyadir.
//emeliyyatlat() higher order funskiyadir. Megsed kod tekrarinin garsisini almagdir.
// for dongusunun icinde bir bir yazmag olardi vurma ve bolme emeliyyatlatini basga basga funksiyalar yaradaraq.
// lakin eyni tip seyi cox yazmag lazim olacagdi. belede ise gelen parametr onsuzdaki eynidir sadece for un icinde aparilan emeliyyat
// basgadir ona gorede first class funksiya yaradib muxletif olan hisseleri onun icinde yazib, daha sonra high order funksiyadan
// istifade ederek fist class funckiyani ve arrayi parametr olarag gonderirik.

//higher order funskiyasina parametr olarag gonderilen funksiyaya ise callBack funksiya deyilir. Bu numunede
// ikiyeVur() , ikiyeBol() callBack funksiyadir. cunki onlar cagirilmirlar sadece higherorder funksiya ise dusende onlarda isleyir.