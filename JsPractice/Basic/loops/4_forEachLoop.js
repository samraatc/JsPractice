const coding = ["js", "rubby", "java", "Python", "CPP"];


// coding.forEach( function (value) {
//     console.log(value);
// })


// coding.forEach((variable) => {
//     console.log(variable);
// })


// function PrintMe (item){
//     console.log(item);
// }

// coding.forEach(PrintMe);




// coding.forEach((variable, index , Array) => {       // forEach method have three parameters that value/item, index, array as shown in the example
//     console.log(variable, index , Array);
// })



const MyCoding = [
    {name: "js", language: "JavaScript"},
    {name: "ruby", language: "Ruby"},
    {name: "java", language: "Java"},
    {name: "python", language: "Python"},
    {name: "cpp", language: "C++"}
]

MyCoding.forEach( (item) => {
    console.log(item.name);
    
})