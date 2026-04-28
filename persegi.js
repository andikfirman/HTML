const prompt = require('prompt-sync')({sigint:
  true})
// menghitung luas dan keliling persegi
let s = prompt("masukkan panjang sisi")
s = parseFloat(s);

let luas = s * s
let keliling = 4 * s

console.log("luas persegi:"+ luas);
console.log("keliling persegi"+ keliling);