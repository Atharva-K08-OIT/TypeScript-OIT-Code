// class Person {
//   constructor(public name: string, public age: number) {}
var SuperDancer = /** @class */ (function () {
    function SuperDancer(name, age, danceStyle) {
        this.name = name;
        this.age = age;
        this.danceStyle = danceStyle;
    }
    SuperDancer.prototype.getData = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Dance Style: ").concat(this.danceStyle);
    };
    return SuperDancer;
}());
var s1 = new SuperDancer("Atul", 12, "Hip Hop");
console.log(s1.getData());
