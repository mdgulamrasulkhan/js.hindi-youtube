// var c =700
// let a = 50
// if(true){

// let a = 30
// const b = 20
//  c = 40
//  console.log("inner :" , a);
// }
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh" ;
    function two(){
        const website = "youtube"
        console.log(username);
    }
   console.log(username);
    // two();
    // one()
}
// one()

if (true) {
    const username = "hitesh"
    if(username==="hitesh"){
        const website = " youtube"
        // console.log(username +  website);
    }
    // console.log(website);
}
// console.log(username);

console.log(addone(5));
function addone(num){
    return num+1
}
//addone(5)
console.log(addtwo);
const addtwo = function(num){
    return num+2
}
// addtwo(5)