const prompt = require('prompt-sync')({sigint:
  true})
// menghitung luas dan panjang
let p = parseFloat(prompt("masukkan panjang:"))
let l = parseFloat(prompt("masukkan lebar:"))

let luas = p * l 
let keliling = 2 * (p * l);

console.log("luas:" + luas);
console.log("keliling:" + keliling);