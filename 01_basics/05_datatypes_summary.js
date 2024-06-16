// primitive datatypes -
//Number, boolean, string, null, undefined,bigint,symbol
// const score = 100
 const scorevalue = 100.3

 const loggedIn = false
 const outsideTemp = null
// let userMail;

// const id= Symbol('123')
// const anotherId = Symbol('123')
// console.log(id===anotherId);
// const bignumber = 458768768767857646565343378n
// console.log(bignumber);
// // reference (non primitive)
// //Array,objects,functions
// const heros = ["shaktiman","balveer","doha"]
// console.log(typeof loggedIn);

// let myobj = {
//     Name: "farhan",
//     Age : 22,

// }
// const myfunction = function(){
//     console.log("hello world");
// }
// console.log(typeof myfunction);

/* note :-
type of value        result
undefined             undefined 
null                  object
boolean                boolean
NUMBER                   number
STRING                   string
*/
//**************************************************************************************************** */

let myYoutubename = "farhankhanofficial"
let anothername = myYoutubename

anothername = "herobhai480"
console.log(myYoutubename);
console.log(anothername);

let user01 = {
    email : "farhan@gmail.com",
    upi : "farhan@ybl"

}
let user02 = user01
user02.email = "mdgulamrasoolkhan@gmail.com"
console.log(user01.email);
console.log(user02.email);
// non premitive me kux v chnage hota hai to wo original data me changes hote hai
// non premitive me stack ka use hota hai jaha copy milta hai , jabki primitive datatypes me heap use hota hai jaha ki original data hi milta hai