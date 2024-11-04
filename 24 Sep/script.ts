// class Person {
//   constructor(public name: string, public age: number) {}

//   getPersonDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   }
// }

// class Employee extends Person {
//   constructor(
//     public name: string,
//     public age: number,
//     public department: string
//   ) {
//     super(name, age);
//   }
//   getEmployeeDetails() {
//     return `${this.getPersonDetails()}, Department: ${this.department}`;
//   }
// }

// class Manager extends Employee {
//   constructor(
//     public name: string,
//     public age: number,
//     public department: string,
//     public project: string
//   ){
//     super(name, age, department);
//   };
// }

// class Student extends Person {
//   constructor(public name: string, public age: number, public rollno: number) {
//     super(name, age);
//   }
//   getStudentDetails() {
//     return `${this.getPersonDetails()} Roll No.: ${this.rollno}`;
//   }
// }

// let s1 = new Student("Ashok", 22, 1);
// console.log(s1.getStudentDetails());
// --------------------------------------------------------

interface Person {
  name: string;
  age: number;
}

interface Dancer {
  danceStyle: string;
}

class SuperDancer implements Person, Dancer {
  constructor(
    public name: string,
    public age: number,
    public danceStyle: string
  ) {}
  getData() {
    return `Name: ${this.name}, Age: ${this.age}, Dance Style: ${this.danceStyle}`;
  }
}
let s1 = new SuperDancer("Atul",12,"Hip Hop");
console.log(s1.getData())