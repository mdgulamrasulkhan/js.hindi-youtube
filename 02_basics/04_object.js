//const tinderuser = new Object()
const tinderuser = {}


tinderuser.id = "abc123"
tinderuser.name = "Farhaan"
tinderuser.isLoggedIn = false 
// console.log(tinderuser)

const regularObject = {
    email : "farhankhan@gmail.com" ,
    full_name : {
        user_name : {
            first_name :"farhaan" ,
            last_name  : "khan"
     } ,
    age : 18 ,
    isLoggedIn : false
}
}
// console.log(regularObject.full_name.user_name.last_name);

const obj1 = { 1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj4 = { 5 :"a" , 6 :"b"}

// const obj3 = Object.assign(obj1,obj2 , obj4)
// const obj3 = {...obj1,...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "hello@gmail.com"
    },
{

},
{},
{
},
]
const mail = users[1].id
// console.log(mail);
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty("isLogged"));

const course = {
    coursename : "JS in Hindi" , 
    price : "999" ,
    courseInstructor : "hitsh"

}

// course.courseInstructor
const {courseInstructor : Instructor} = course
console.log(Instructor);

/********************JSON API */

{
    name : "farhan",
    age : 18,
}

[
                                     /*api array or object dono ke form me hote hai

]