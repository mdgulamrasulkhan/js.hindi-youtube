const mynums = [1,2,3]

const myTotal = mynums.reduce (function(acc , currval) {
    // console.log(`acc : ${acc} and currentvalue : ${currval}`);
    return  acc + currval
    return console.log(myTotal);
},0)
// return console.log(myTotal);

// short wat

const myNewTotal = mynums.reduce((acc,cur) => acc+cur , 0)

// console.log(myNewTotal);

/* ____________________________________________*/

const shoppingCart = [
    {
        itemName : "JS course",
        price : 2999
    },

    {
        itemName : "py course",
        price : 1999
    },

    {
        itemName : "Java course",
        price : 999
    }
]

const userToPay = shoppingCart.reduce((acc,item) => acc+ item.price , 0)
console.log(userToPay);
