let arr = [1, 2, 3, 4, 5];

// arr.forEach(function(num){
//     console.log(num+1)
// })
//ve ya

function ustegel(num) {
  console.log(num + 1);
}
arr.forEach(ustegel);

//parametr olarag funksiya alir ona gorede higher order funskiya sayilir forEach
