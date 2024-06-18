//  dates
// let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toISOString());

let mycreatedDate = new Date("01-14-2023")
// console.log(mycreatedDate.toLocaleString());
// console.log(mycreatedDate.toLocaleDateString());

// let timestamp = Date.now()
// console.log(timestamp);
// console.log(mycreatedDate.getTime());
// console.log(mycreatedDate.getTime()/1000); /*for convert time miliseconds to seconds*/
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() +1); /* coz month is started from zero*/

newDate.toLocaleString('default' , {
    weekday = "long"
})
console.log(newDate);