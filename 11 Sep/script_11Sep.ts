// Union Of Types

// Ex.1

// var id = 201409023
// var id = "S2409AD023"

// function TrackRecord(id:number|string){
//     if(typeof id == "string"){
//         id = id.toUpperCase()
//         console.log(`id:${id} is get Recorded`);
//     }
//     else{
//         console.log(`id:${id} is get Recorded`)
//     }
// }

// TrackRecord("S02309AD023")
// ----------------------------------------------------------

// Ex.2

// str = "Orange"
// str = ["Red","Blue","Yellow","Green"]

// function PrintColor(color: string | string[]) {
//   if (Array.isArray(color)) {
//     console.log(color.join(', '));
//     // color.forEach((item) => {
//     //   console.log(item);
//     // });
//   } else {
//     console.log(`Your Given color is ${color}`);
//   }
// }

// PrintColor("Orange")
// PrintColor(["Red", "Blue", "Yellow", "Green"])

// Type Aliases

// type Point = { x: number; y: number };
// var p: Point = { x: 3, y: 9 };
// var p1: Point;
// p1 = { x: 2, y: 4 };

// type Book = {
//   title: string;
//   page: number;
// };

// var b1: Book = { title: "Python", page: 800 };
// var b2: Book = { title: "Python", page: 800 };

