let arr = [1, 2, 3, 4]
console.log(arr);

// Spread - Unpacking into individual elements [...]
//syn -  ...arrname
// 1.1 Array
let arr1 = [5,6]
let arr2 = [...arr,7, 8]
console.log(arr2);

// 1.2 Copying
let  arr4 = [...arr2]
console.log(arr4);

// 1.3 Catination 
let arr5 = [...arr1, ...arr4]
console.log(arr5);

// 2.1 Objects
let person = {
    name: "sarvs",
    age:"101"
}
//2.2 Catination 
let pern1 = {
    ...person,
    location:"hyd"
}
console.log(pern1);

// 2.3 Copying 
let pern3 = { ...pern1, ...person }
console.log(pern3);


//Rest - Pack into an array [...arrname]

function add(...num) { // this is rest  - it must be last
    console.log(num);
    
}
add(5, 10)

let num = [1, 2, 3, 4]
add(...num)  // this is spread 

//Destructuring on Fly array
const a = [1,2,3,45,6]
const [k, b, c, d, e] = a;
console.log(d);

//Destructuring on Fly objects

let emp = {
    ...person,
    location:"hyd"
}
console.log(emp["location"]);
const { location } = emp
console.log(location);
