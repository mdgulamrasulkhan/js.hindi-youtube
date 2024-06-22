const myObject = {
    JS : "javascript" ,
    Cpp : "c++",
    Rb : "ruby",
    SWIFT : "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} is used for : ${myObject [key]}`);
}

const programmimg = ["js" , "py" , "java" , "cpp"]
for (const key in programmimg) {
    
        // console.log(key);
        // console.log(programmimg[key]);
    }

   /* const map =  new Map()
map.set('IN' , "INDIA")
map.set('USA' , "United State of America")
map.set('Fr' , "France")
map.set('IN' , "INDIA")

for (const key in map) {
   console.log(key);
        
    }

    so in for in loop Map is not iterable  , that's why use for of loop*/
