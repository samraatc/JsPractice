const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//------------------------filter-------------------------------------------

// const NewArray = numArray.filter( (num) => num > 5 )
// const NewArray = numArray.filter( (num) => {
//    return num > 5  } )
// console.log(NewArray);



//-----------------------------------------forEach-------------------------------------

// const ifCONditionArray = [];


// numArray.forEach( (num) => {
//     if (num > 3) {
//         ifCONditionArray.push(num);    // push is used to add the value i.e num form the numArray
//     }
// })
// console.log(ifCONditionArray);



const books = [                    // this the data set as save in database
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

//   const userBooks = books.filter( (book) => book.genre === "Science" );   // this how data is retrived from the database

//   console.log(userBooks);


// const pubBooks = books.filter((book) => book.publish >= 2000)

// console.log(pubBooks);

// const ediBooks = books.filter((book) => {return book.edition >= 1995 &&  book.genre === "History"})

// console.log(ediBooks);

  



//------------------------------------------ Map --------------------------------------------------

const Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const squareNum = Num.map( (num) => num * num );
// const newNum = Num.map( (num) => {return num + 10} );
// console.log(newNum);
// console.log(squareNum);



//----------------------Chaining-----------------------------

const Chaining = Num
      .map( (num) => num * 10)
      .map( (num) => num + 4)
      .filter((num) => num > 50);

console.log(Chaining);
