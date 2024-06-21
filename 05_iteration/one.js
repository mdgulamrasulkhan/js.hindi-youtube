// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        // console.log("5 is the best number");
    }
    // console.log(i);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`table of ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`inner loop of value ${j} and inner loop of value ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArray = ["masoom" , "farhaan" , "mister"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}
    
// break & continue

// for (let index = 1; index <= 20; index++) {
//     if (index==5){
//         console.log(" no. 5 is detected");
//         break
//     }
    
//     console.log(`value of i is ${index}`);
    
// }


for (let index = 1; index <= 20; index++) {
    if (index==5){
        console.log(" no. 5 is detected");
        continue
    }
    
    console.log(`value of i is ${index}`);
    
}

