const score = 300
console.log(score);
const balance = new Number(123.845)
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));
// console.log(balance.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// *********************************maths*************************************************************************

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(7.86));
console.log(Math.ceil(7.26));
console.log(Math.floor(7.86));
console.log(Math.min(7.8,6,4,6,8,4));
console.log(Math.max(7,6,9,5,2,1));

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) +1);
const min = 10
const max = 20
console.log( Math.floor(Math.random()*(max-min +1)+min));