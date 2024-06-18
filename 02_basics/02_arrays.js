const marvel_Heros = [ "thor" , "ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]
// marvel_Heros.push(dc_heros)
// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);
const newArray = marvel_Heros.concat(dc_heros)
// console.log(newArray);
const all_newHeros = [...dc_heros, ...marvel_Heros]
// console.log(all_newHeros);

const anotherArray = [1,2,3,4,4,4,5,6,[87,6,65,[56,7,5,6]]]
const realAnoterArray = anotherArray.flat(Infinity)
// console.log(realAnoterArray)

console.log( Array.isArray("farhan"))
console.log( Array.from("farhan"))
//  console.log( Array.from({name : "farhan"})) /*interesting case whenever we passa object output is empty array*/

let score1 = 200
let score2 = 500
let score3 = 800
console.log(Array.of(score1, score2 , score3));