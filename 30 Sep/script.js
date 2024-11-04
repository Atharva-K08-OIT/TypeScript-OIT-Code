"use strict";
// Generics for functions interfaces classes
// function load<T>(msg:T){
//     console.log(msg);
// }
// // function load(msg){
// //     console.log(msg);
// // }
// load<string>("hey")
// load<number>(4)
// load(true)
// -------------------------------
// interface locker<T> {
//   key: T;
// }
// let lock: locker<number> = { key: 1234 };
// console.log(lock);
// let lock2: locker<string> = {key:"abc"};
// console.log(lock2)
// ----------------------------------
// class LaptopBulider<A> {
//   constructor(public id: A) {}
// }
// let b = new LaptopBulider<string>("onetwothree");
// let b2 = new LaptopBulider<number>(123);
// ---------------------------------------
function recorder(a) {
    return "sey"; //type assertion
    return "sey"; //type assertion
}
recorder("yes");
let num = "123";
console.log(Number(num));
let n = 531;
console.log(String(n));
