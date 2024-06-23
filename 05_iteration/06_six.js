// // const coding = ["js", "ruby", "java", "python", "cpp"]

// // const values = coding.forEach( (item) => {console.log(`the item of array is : ${item}`)} )

// // console.log(values);  ** so foreach loop never return a value**

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// // const newNums = myNums.filter((num) =>{
   
//     // return num>4 })
//      /* if we don't use paranthesis then no need to use keyword of return but if we use 
//                               paranthesis then we should have to use return keyword in filter loop*/
//     //  console.log(newNums);

    
        
//     // });

//     const myNewnums = []
//     myNums.forEach((num => {
//         if(num>4){
//             myNewnums.push(num)
//             // console.log(myNewnums);
//         }
//     }))

    // console.log(myNewnums);

    const books = [
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
        { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
        { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
        { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
        { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
        { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
      ];
    
//   const userBook = books.filter((book) => book.genre === "History" )
//   const userBook = books.filter((book) => book.genre = "History" && book.edition > 2000 )
 const userBook = books.filter((book) =>{ return book.genre = "History" && book.edition > 2000 && book.publish > 2000})
   console.log(userBook);