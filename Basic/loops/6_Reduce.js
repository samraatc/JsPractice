const numArray = [1, 2, 3, 4, 5, 6];

// const accumulatorTest = numArray.reduce( function (accumulator, currentValue)  {
//     console.log(`initail accumulator : ${accumulator} and current value : ${currentValue}`);
    
//     return accumulator + currentValue;
// }, 0)  

// console.log(accumulatorTest);


// const reduceTest = numArray.reduce((acc, currval) => {
//     console.log(`accumulator : ${acc} and currval : ${currval}`);
//     return acc + currval;
        
//     }, 0);

// console.log(reduceTest);
     



//----------------------- Reduce On Object --------------------------

const shoppingCard = [
    {BookName : 'Python',
    Price : 1050,
    Author : 'samraat'},
    {
    BookName : 'JavaScript',
    Price : 1050,
    Author : 'Ram'
    },
    {
    BookName : 'Java',
    Price : 1050,
    Author : 'Sham'
    }
    ]

//    const priceToPay = shoppingCard.reduce( (acc, item) => {
//         return acc + item.Price
//     },0)

//     console.log("total price of  books is : ", priceToPay);



    const result = shoppingCard.reduce( (acc, item) => {
        return {...acc, [item.Author]: (acc[item.Author] || 0) + item.Price}
    }, {})
    console.log(result);



