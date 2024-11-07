function Details(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;

    return this;
}


//  createing instance  without using new keyword this will overwrite the existing instance
const Adviser =  Details('Adviser', 26, 'KTM');
const Bishnu =  Details('Bishnu', 26, 'Bangalore');

console.log(Adviser);   // the output will be overwritten by new instance created


// createing inctance uing new key word this will not be overwritten by new instance
const Adviser11 =  new Details('Adviser', 26, 'KTM');
const Bishnu11 =  new Details('Bishnu', 26, 'Bangalore');
console.log(Adviser11);  // the output will be new instance created

