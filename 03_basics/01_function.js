function Saymyname() {
    console.log("F");
    console.log("A");
    console.log("R");
    console.log("H");
    console.log("A");
    console.log("N");
}
/*   Saymyname() //execute
Saymyname   //reference  */

// function addtwonumbers (number1, number2){
//     console.log(number1 + number2);
// }
function addtwonumbers (number1, number2){
     // let result = number1 + number2
    // return result
    // console.log("farhan"); /* after return no code will be run*/
    return number1 + number2
}
// addtwonumbers(5,7)
// addtwonumbers(5,"6")
// addtwonumbers("5",7)
// addtwonumbers(4,null)

const result = addtwonumbers(5,6)
// console.log("result :" , result);

function loginusermessage (username = "sam") {
    // if( username === undefined) {
    //     console.log("please enter username");
    //     return

    if( !username) {
        console.log("please enter username");
        return

    }
   
    return `${username} just logged in`
   }
//    console.log(loginusermessage("farhan"));

function calculatecartprice( val1, val2, ...num) {
    return num
}
// console.log( calculatecartprice(200, 230,2303,345,5,5,5))

const user = {
    username : "farhan Khan",
    price : 199
}
function handleobject (anyobject) {
    console.log(`so the name of user is ${anyobject.username} and price is ${anyobject.price}`) ;
}
// handleobject(user)
// handleobject({
//     username : "Md Gulam Rasul Khan" , 
//     price : 76448
// })

const mynewarray = [100,200,300,400,500]

function returnsecondvalue (getarray){
    return getarray[1]
}
// console.log( returnsecondvalue(mynewarray));
console.log( returnsecondvalue([400,450,60,60]));
