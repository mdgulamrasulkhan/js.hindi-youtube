// array

const myArray = [0,1,2,3,4,5,6]
const myHeros = ["shaktimaan" , "baalveer"]

const myArray2 = new Array (1,2,3,4)
// console.log(myArray[0]);

// array methods

// myArray.push(8)
// console.log(myArray);
// myArray.pop()
// console.log(myArray);
// myArray.pop()
// console.log(myArray);
// myArray.pop()
// console.log(myArray);
// myArray.unshift(0 , 9)            /* for inserting value in starting */
// console.log(myArray);
// console.log(myArray);
// myArray.shift()                  /* use for remove elements from starting*/
// console.log(myArray);
// console.log(myArray.includes(5));
// console.log(myArray.includes(9));
// const newArray = myArray.join()  /* join() used for seperating elmenet in string types*/
// console.log(myArray);
// console.log(newArray);
// console.log(typeof (newArray));

// slice , splice
// let slicedArray = myArray.slice(0,3)  /* slice not consider range
// console.log(slicedArray);
// 
// console.log(myArray.slice(1,3));  not affect real array & not consider last range
// console.log(myArray);
// console.log(myArray.splice(1,3));  it affect real array &  consider last range also
// console.log(myArray);
const marvel_Heros = [ "thor" , "ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]
const all_Heros = marvel_Heros.push(dc_heros)
console.log(all_Heros);