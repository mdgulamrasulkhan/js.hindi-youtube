// singleton
Object.create


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "farhan" ,
    "full_Name" : "MD GULAM RASUL KHAN",
    age : 20 ,
    mySym : "mykey1" ,
    location : "sitamarhi",
    email : "farhan@gmail.com" ,
    isloggedIn : false ,
    lastLoggedIn : ["Monday" , "Saturday"]

}
// console.log( JsUser.email)
// console.log( JsUser["email"])
// console.log(JsUser.full_Name);

// console.log(JsUser["isloggedIn"]);
JsUser.email = "farhankhan@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "helloworld@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello jsUser");
}
console.log(JsUser.greeting());

JsUser.greeting_two = function(){
    console.log(`hello jsUser, ${this.name}`);
}
console.log(JsUser.greeting_two());