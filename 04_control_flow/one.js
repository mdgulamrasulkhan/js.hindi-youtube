// if
// const userLoggedIn = true
// const temperature = 50.00001
// if(temperature < 50) {
//     console.log("temperture is less than 50");}
//     else
//     console.log("temperture is greater than 50");

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 100
// if(score<200){
//     let power = "fly"
//     console.log(`user power : ${power}`);
// }
// console.log( `User power: ${power} `); /* power is in if scope which is not global scope*/

// const balance = 1000
// if(balance>500) console.log("test1"); console.log("test2");

// const balance = 750
// if(balance<500){
//     console.log("balbce is less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if (balance<1000){
//     console.log("balance is less than 1000");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const isLoggedInFromGoogle = false
const isLoggedInFromEmail = true

if(userLoggedIn||isLoggedInFromEmail||isLoggedInFromGoogle){
    // console.log("Welcome to webite");
}
if(userLoggedIn&&debitCard){
    // console.log("allow to buy");
}
   
if(3===3){
    console.log("hello");
}

/* == -> checks only number not types
  === -> checks no. as well as types of elememt so it is known as strictily check */