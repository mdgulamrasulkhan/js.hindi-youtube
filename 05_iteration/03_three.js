// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const i
     of arr) {
    // console.log("the output is " , i);
}
const greeting = "hello World!"
for (const greets of greeting) {
    // console.log(` all word id a greet ${greets}`);
}
const map =  new Map()
map.set('IN' , "INDIA")
map.set('USA' , "United State of America")
map.set('Fr' , "France")
map.set('IN' , "INDIA")
// console.log(map);
for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}

const myObject = {
    game1 : "nfs",
    game2 : "spider",
    game3 : "temple_run"

}
for (const [key , value] of myObject) {
    console.log(`${key} :- ${value}`);
    
}                                                /* myObject is not iterable  */