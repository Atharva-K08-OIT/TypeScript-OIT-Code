"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    add(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
    multi(a, b) {
        return a * b;
    }
}
exports.default = Calculator;
// class wise export
// obj wise export:
// export let obj = new Calculator();
// export default new Calculator();
