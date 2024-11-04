"use strict";
var TLColor;
(function (TLColor) {
  TLColor["RED"] = "red";
  TLColor["GREEN"] = "greenyellow";
  TLColor["YELLOW"] = "yellow";
})(TLColor || (TLColor = {}));
var TLColorOFF;
(function (TLColorOFF) {
  TLColorOFF["RED"] = "#ff000097";
  TLColorOFF["GREEN"] = "#00800088";
  TLColorOFF["YELLOW"] = "#ffff007f";
})(TLColorOFF || (TLColorOFF = {}));
class TrafficLight {
  constructor(currentColor) {
    this.currentColor = currentColor;
  }
  showSignal() {
    console.log(`The traffic light is ${this.currentColor}.`);
  }
  setSignal(changedColor) {
    this.currentColor = changedColor;
  }
}
let kkm = new TrafficLight(TLColor.GREEN);
kkm.showSignal();
kkm.setSignal(TLColor.RED);
kkm.showSignal();
// -------------------DOM------------------
let redLight = document.querySelector("#red");
let yellowLight = document.querySelector("#yellow");
let greenLight = document.querySelector("#green");
function changTORed() {
  redLight.style.backgroundColor = TLColor.RED;
  yellowLight.style.backgroundColor = TLColorOFF.YELLOW;
  greenLight.style.backgroundColor = TLColorOFF.GREEN;
}
function changTOYellow() {
  yellowLight.style.backgroundColor = TLColor.YELLOW;
  redLight.style.backgroundColor = TLColorOFF.RED;
  greenLight.style.backgroundColor = TLColorOFF.GREEN;
}
function changTOGreen() {
  greenLight.style.backgroundColor = TLColor.GREEN;
  yellowLight.style.backgroundColor = TLColorOFF.YELLOW;
  redLight.style.backgroundColor = TLColorOFF.RED;
}
function setLight() {
  changTOGreen();
  setTimeout(changTOYellow, 1000);
  setTimeout(changTORed, 2000);
}
let id = setInterval(setLight, 3000);
function Stop() {
  clearInterval(id);
}
