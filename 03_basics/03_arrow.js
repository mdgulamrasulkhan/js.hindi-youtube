const user = {
username : "farhan", 
price : 999,
welcomemessage : function() {
    // console.log(` ${this.username} , welcome to website`);
    // console.log(this);

}
}
user.welcomemessage()
user.username = "masoom"
user.welcomemessage()
// console.log(this);

// function chai (){
//     username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chay = function(){
//      username = "hitesh"
//     console.log(this.username);
// }
// chay()

// const chai = () => {
//     username = "hitesh"
//     console.log(this);
// }
// chai()

// const addtwo = (num1, num2) => {
//     return num1+num2
// }
// const addtwo = (num1, num2) =>  num1+num2
//  const addtwo = (num1, num2) =>  (num1+num2)
 const addtwo = (num1, num2) =>  ({username : "farhan" })

console.log(addtwo(9,8))