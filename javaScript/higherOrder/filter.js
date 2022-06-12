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
  {
    name: "natig",
  },
];

//user arrayinin icindeki herbir elementi item deye adlandirib, sert yazirig. ve filter o serti odeyen itemlere gore is gorur
const newUser = user.filter((item) => item.name.length > 5);
console.log(newUser); // [ { name: 'farida' }, { name: 'gulnara' } ]

//bize gelen deyer eger arrayin icinde varsa onda onu arrayin icinden cixarib arrayi geri gaytarir
const deleteUser = (us) => {
  let deleted = user.filter((item) => item.name != us);
  console.log("item removed from array", deleted); //  [ { name: 'zahra' }, { name: 'farida' }, { name: 'gulnara' } ]
};
deleteUser("natig");

//gelen deyere gore if else - e uygun is goruruk:
const blabla = (name) => {
  let newArr = user.filter((item) =>
    item.name === "zahra"
      ? console.log("user exist")
      : console.log("user yoxdur")
  );
};
blabla("zahra");
