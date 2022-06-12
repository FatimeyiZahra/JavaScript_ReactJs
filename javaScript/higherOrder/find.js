let user = [
  {
    id: 1,
    name: "zahra",
  },
  {
    id: 2,
    name: "farida",
  },
  {
    id: 3,
    name: "gulnara",
  },
];

// sert yazirigki id si x olani getir 
const findUser = user.find((item) => item.id === 1);
console.log(findUser)