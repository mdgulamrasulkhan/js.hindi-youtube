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
   console.log(loginusermessage("farhan"));