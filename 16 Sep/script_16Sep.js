// Ex.1 (Simple Class With Default Values and instances)
// class Chair {
//   public material: string = "wood";
//   public color: string = "black";
//   public price: number = 1200;
//   public noOfLegs: number = 4;
// }
// var c1 = new Chair();
// console.log("Material Of Chair: ", c1.material);
// console.log("Colour Of Chair: ", c1.color);
// console.log("Price Of Chair: ", c1.price);
// console.log("No of Legs Of Chair: ", c1.noOfLegs);
// var c2 = new Chair();
// c2.material = "metal";
// c2.color = "white";
// c2.price = 2500;
// console.log("Material Of Chair: ", c2.material);
// console.log("Colour Of Chair: ", c2.color);
// console.log("Price Of Chair: ", c2.price);
// console.log("No of Legs Of Chair: ", c2.noOfLegs);
// Ex.2 (Simple Class With Contructor Values and instances)
// class Chair {
//   material: string;
//   color: string;
//   price: number;
//   noOfLegs: number;
//   constructor(
//     material: string, color: string, price: number, noOfLegs: number
//   ) {
//     this.material = material;
//     this.color = color;
//     this.price = price;
//     this.noOfLegs = noOfLegs;
//   }
// }
// var c1 = new Chair("wood", "black", 1200, 4);
// console.log("Material Of Chair: ", c1.material);
// console.log("Colour Of Chair: ", c1.color);
// console.log("Price Of Chair: ", c1.price);
// console.log("No of Legs Of Chair: ", c1.noOfLegs);
// var c2 = new Chair("metal", "white", 3000, 4);
// console.log("Material Of Chair: ", c2.material);
// console.log("Colour Of Chair: ", c2.color);
// console.log("Price Of Chair: ", c2.price);
// console.log("No of Legs Of Chair: ", c2.noOfLegs);
// Ex.3 (Parameter Property)
// class Chair {
//   constructor(public material: string) {
//     this.material = material;
//   }
// }
// var c1 = new Chair("wood");
// console.log("Material Of Chair: ", c1.material);
// var c2 = new Chair("metal");
// console.log("Material Of Chair: ", c2.material);
// Ex.3 (Access Specifiers):
// class Chair {
//   constructor(public material: string, public price: number) {
//     this.material = material;
//     this.price = price;
//   }
//   setPrice(v: number): void {
//     this.price = v;
//   }
// }
// class GamingChair extends Chair {
//   NewPrice(v: number): void {
//     this.price = v;
//   }
// }
// var c1 = new Chair("wood", 1200);
// console.log("Price Of Chair: ", c1.price);
// c1.price = 1500;
// console.log("Price Of Chair: ", c1.price);
// c1.setPrice(4000);
// console.log("Price Of Chair: ", c1.price);
// Ex.4 (Default parameters):
// class Chair {
//   constructor(public price: number,public material:string = "Wood") {
//     this.material = material;
//     this.price = price;
//   }
// }
// var c1 = new Chair(1200,"Metal");
// var c2 = new Chair(1200,"cloth");
// var c3 = new Chair(2000);
// console.log(c3.material)
// Ex.5 (Optional parameters):
// class Chair {
//   constructor(public price: number,public material:string = "Wood",public GSTNo?:string) {
//     this.material = material;
//     this.price = price;
//   }
// }
// var c1 = new Chair(1200,"Metal","MH34QU248P");
// var c2 = new Chair(1200,"cloth");
// var c3 = new Chair(2000);
// console.log(c1.GSTNo)
// Ex.6 (ReadOnly parameters):
// class Chair {
//   constructor(public readonly price: number,public material:string = "Wood",public GSTNo?:string) {
//     this.material = material;
//     this.price = price;
//   }
// }
// var c1 = new Chair(1200,"Metal","MH34QU248P");
// console.log(c1.GSTNo)
// console.log(c1.price)
// console.log(c1.material)
// Ex.7 (getter and setter parameters):
// class Chair {
//   constructor(private _price: number,public material:string) {
//     this.material = material;
//     this._price = _price;
//   }
//   public set price(newPrice:number){
//     this._price = newPrice
//   }
//   public get price(){
//     return this._price
//   }
// }
// var c1 = new Chair(1200,"Gold");
// console.log(c1.price);
// c1.price = 4500
// console.log(c1.price);
// Ex.7 (static parameters):
var Chair = /** @class */ (function () {
    function Chair(price, material) {
        this.price = price;
        this.material = material;
        this.material = material;
        this.price = price;
    }
    Chair.GSTNo = "MH14456QH";
    return Chair;
}());
var c1 = new Chair(1200, "Gold");
console.log(Chair.GSTNo);
Chair.GSTNo = "0000";
console.log(Chair.GSTNo);
