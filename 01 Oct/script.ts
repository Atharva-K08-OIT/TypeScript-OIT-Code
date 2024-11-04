// import { add, addAll } from "./myfile";

// console.log(add(90, 45));

// console.log(addAll(2, 3, 4, 6, 8, 9));

// // obj
// // import  abc  from './myClass'
// // console.log(abc.multi(3,30))



// // class
// import cal from "./myClass";
// let obj = new cal();
// console.log(obj.add(2, 4));

// ----------------------------------------------
function log(val:number,callback:Function){
    console.log(callback(val));
}

function sq(val:number){
    return val**2;
}

log(80,sq);

// -------------------------------------------------

let arr:number[] = [2,4,5,6];

let sqrr = arr.map((val:number):number=>{
    return (val*val)
})
console.log(sqrr)


let even = arr.filter((val:number):boolean=>{
    return val%2 == 0;
})

console.log(even)


let sum = arr.reduce((a:number,b:number):number=>{
    return a+b
})
console.log(sum)