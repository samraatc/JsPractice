// const app = new Object();   // this create singleton instance 

const appuser = {};   // this is a empty object


appuser.id = '14',    // values are assin  to the object 
appuser.name = 'samraat',
appuser.age = '25',
appuser.isLogedin = false


// console.log(appuser);


const reguraluser = {
    fullNam : {
        userFullName : {
            firstName : 'Samraat',
            lastName : 'Chaudhary'
        }
    }
}


// console.log(reguraluser);
// console.log(reguraluser.fullNam);
// console.log(reguraluser.fullNam.userFullName);
// console.log(reguraluser.fullNam.userFullName.firstName);



const obj1 = {1 :'a', 2:'b'}
const obj2 = {3 :'a', 4:'b'}
const obj3 = {5 :'a', 6:'b'}

// const obj = {obj1, obj2, obj3};

// const obj = {...obj1, ...obj2,...obj3};

// const obj = Object.assign({},obj1, obj2, obj3);


// console.log(obj);



//--------------------------object in array  ---------------------------



// const arr = [
//     {id: 1, name: 'Samraat'},
//     {id: 2, name: 'Chaudhary'},
//     {id: 3, name: 'Shah'},
// ]



const arrayObject = [
    {
        id: 1,
        name: 'Samraat',
        email : 's@gmail.com'
    },
    {
        id: 2,
        email : 's@gmail.com'
    },
    {
        id: 3,
        email : 's@gmail.com'
    },
    {
        id: 4,
        name: 'Samraat',
        email : 's@gmail.com'
    }
]


arrayObject[1].email


// console.log(Object.keys(appuser))
// console.log(Object.values(appuser))
// console.log(Object.entries(appuser))

// console.log(appuser.hasOwnProperty('isLogedOut'));



const study = {
    courseName : "Js in Nepali",
    price : "999",
    courseInstructor : "samraat"
}


// const {courseInstructor : Instructor } = study;      // distructuring the Object

const {courseName : course} = study;

console.log(course)


