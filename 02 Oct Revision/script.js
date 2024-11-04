"use strict";
// abstract class Person {
//   constructor(public name: string, protected age: number) {}
//   abstract travl(): void;
// }
// class Student extends Person {
//   constructor(name: string, age: number, public rollNo: number) {
//     super(name, age);
//   }
//   display() {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.rollNo);
//   }
//   // overriding
//   travl(): void {
//     console.log(this.name + " travl's to college");
//   }
//   static myFriends() {
//     console.log("My friends are good");
//   }
//   result(per:number):string;
//   result(per:number,isGrade:boolean):string;
//   result(per: number, inGrade?: boolean): string {
//     if (inGrade == true) {
//       if (per > 80) {
//         return "A";
//       } else if (per > 50) {
//         return "B";
//       } else {
//         return "Fail";
//       }
//     }
//     else{
//         return `${per}%`;
//     }
//   }
// }
// let p = new Student("Raju", 45, 21);
// p.travl();
// Student.myFriends();
// console.log(p.result(96,true))
// let sub1 = "Math"
// let sub2 = "Science"
// let sub3 = "English"
// // rest operator
// let arr = (...nums:string[]) =>{
//     return nums
// }
// console.log(arr(sub1,sub2,sub3))
// let brr = [2,3,4,5]
// let crr = [6,7,8,...brr]
// console.log(crr)
