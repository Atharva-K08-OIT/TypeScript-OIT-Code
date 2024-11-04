"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.addAll = addAll;
function add(a, b) {
    return a + b;
}
function addAll(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}
