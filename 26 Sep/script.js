// Ex.1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// abstract class BankAcc{
//     abstract CalInterest():number;
// }
// class SavingAcc extends BankAcc{
//     constructor(public name:string,private balance:number){super()}
//     public CalInterest():number{
//         return 0.05 * this.balance;
//     }
// }
// class CurrentAcc extends BankAcc{
//     constructor(public name:string,private balance:number){super()}
//     public CalInterest():number{
//         return 0.07 * this.balance;
//     }
// }
// let rajuAcc = new SavingAcc("raju",50000)
// console.log(rajuAcc.CalInterest())
// let kajuAcc = new CurrentAcc("kajal",50000)
// console.log(kajuAcc.CalInterest())
// ----------------------------------------------------------------------------
// type Matrix = {
//   0: [number, number, number];
//   1: [number, number, number];
//   2: [number, number, number];
// };
// abstract class Calculator {
//   abstract add(A, B): number | Matrix;
//   abstract add(A, B): number | Matrix;
// }
// class ArithmaticCal extends Calculator {
//   add(...nums): number {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//       sum += nums[i];
//     }
//     return sum;
//   }
// }
// class MatrixCal extends Calculator {
//   add(A: Matrix, B: Matrix): Matrix {
//     let M: Matrix = {
//       0: [0, 0, 0],
//       1: [0, 0, 0],
//       2: [0, 0, 0],
//     };
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         M[i][j] = A[i][j] + B[i][j];
//       }
//     }
//     return M;
//   }
// }
// let c1 = new ArithmaticCal();
// console.log(c1.add(3, 4, 5, 7, 6, 5, 10));
// let A: Matrix = {
//   0: [3, 5, 6],
//   1: [1, 2, 3],
//   2: [3, 5, 7],
// };
// let B: Matrix = {
//   0: [3, 5, 6],
//   1: [1, 2, 3],
//   2: [3, 5, 7],
// };
// let c2 = new MatrixCal()
// console.log(c2.add(A, B));
// -------------------------------------
// class Parent{
//     Show(){
//         console.log("I am parent");
//     }
// }
// class Child extends Parent{
//     Show(): void {
//         console.log("I am Child");
//     }
// }
// let c = new Child();
// c.Show()
// ------------------------------
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    return Calculator;
}());
var ArithmaticCal = /** @class */ (function (_super) {
    __extends(ArithmaticCal, _super);
    function ArithmaticCal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArithmaticCal.prototype.add = function () {
        var num = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            num[_i] = arguments[_i];
        }
        var sum = 0;
        for (var i = 0; i < num.length; i++)
            sum += num[i];
        return sum;
    };
    return ArithmaticCal;
}(Calculator));
var a1 = new ArithmaticCal();
console.log(a1.add(2, 3, 4, 5, 6));
var m1 = {
    x: [3, 5, 6],
    y: [7, 8, 9],
    z: [1, 2, 3],
};
var m2 = {
    x: [3, 5, 6],
    y: [7, 8, 9],
    z: [1, 2, 3],
};
var MatrixCal = /** @class */ (function (_super) {
    __extends(MatrixCal, _super);
    function MatrixCal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatrixCal.prototype.add = function (A, B) {
        var M = {
            x: [0, 0, 0],
            y: [0, 0, 0],
            z: [0, 0, 0],
        };
        for (var i = 0; i < 3; i++) {
            // M[i][j] = A[i][j] + B[i][j];
            M.x[i] = A.x[i] + B.x[i];
            M.y[i] = A.y[i] + B.y[i];
            M.z[i] = A.z[i] + B.z[i];
        }
        // for(let i=0;i<3;i++){
        //     for(let j=0;j<3;j++){
        //         M[i][j] = A[i][j] + B[i][j];
        //     }
        // }
        return M;
    };
    return MatrixCal;
}(Calculator));
var mc1 = new MatrixCal();
console.log(mc1.add(m1, m2));
