// 1.Type Annotations on Variables:
// var a: number = 5;
// var b: string = "Hello";
// var c: boolean = true;
// var d: number = 3;
// console.log(a ** d); // o/p: 125
// var arr: number[] = [3, 5, 6, 8];
// var abc:any;  // avoid any type
// 2.Type Annotations on Functions:
// function greet(): void {
//   console.log("Hello");
// }
// greet();
// function add(a: number, b: number):number {
//   var sum:number = a + b;
//   return sum
// }
// console.log("Sum: " + add(4,7));
// "S09AD0923" :string
// function setItemIdInDataBase(id:string):void{
//     id = id.toUpperCase();
//     console.log(`Registration of ${id} done successfully..! `)
// }
// setItemIdInDataBase("s09Ad0923");
// var marks = [88, 99, 97, 95];
// marks.forEach(function (m): void {
//   console.log("-->" + m);
// });
// function ShowCoordinates(point: { x:number; y:number }):void{
//     console.log(`Coordinates: (${point.x}, ${point.y})`);
// }
// var Point = { x: 5, y: 4 };
// ShowCoordinates(Point)
// // ShowCoordinates({ x: 5, y: 4, z: 5 }) error
// Optional Parameters:
