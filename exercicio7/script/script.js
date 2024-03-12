let num1 = 1; // number
let num2 = 2.3; // number
let num3 = "3"; // string
let soma = num1 + num2; // 3.3
document.write(`<p>${soma}</p>`); // 3.3
document.write(`<p>${num1 + num3}</p>`); // 13
document.write(`<p>${num1 + parseInt(num3)}</p>`); // 4
document.write(`<p>${num1.toString() + num2}</p>`); // 12.3
document.write(`<p>${typeof num1}</p>`); // number
document.write(`<p>${typeof num3}</p>`); // string
let num4 = 10.5789551255547; // number
document.write(`<p>${num4}</p>`); // 10.5789551255547
document.write(`<p>${num4.toFixed(2)}</p>`); // 10.58
document.write(`<p>${Number.isInteger(num4)}</p>`); // false
let num5 = num1 * 'Olá'; // NaN
document.write(`<p>${num5}</p>`); // NaN
document.write(`<p>${Number.isNaN(num5)}</p>`); // true
document.write(`<p>${Number.isNaN(num1)}</p>`); // false

let num6 = 0.7; // number
let num7 = 0.1; // number
document.write(`<p>${num6 + num7}</p>`); // 0.7999999999999999
num6 += num7; // 0.8
num6 += num7; // 0.9
num6 += num7; // 1.0
document.write(`<p>${num6}</p>`); // 0.9999999999999999
num6 = num6.toFixed(2); // 1.00
document.write(`<p>${num6}</p>`); // 1.00