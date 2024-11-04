enum TLColor {
  RED = "red",
  GREEN = "greenyellow",
  YELLOW = "yellow",
}

enum TLColorOFF {
  RED = "#ff000097",
  GREEN = "#00800088",
  YELLOW = "#ffff007f",
}

class TrafficLight {
  constructor(private currentColor: string) {}
  showSignal() {
    console.log(`The traffic light is ${this.currentColor}.`);
  }
  setSignal(changedColor: string) {
    this.currentColor = changedColor;
  }
}

let kkm = new TrafficLight(TLColor.GREEN);
kkm.showSignal();
kkm.setSignal(TLColor.RED);
kkm.showSignal();

// -------------------DOM------------------

let redLight = document.querySelector("#red")! as HTMLDivElement;
let yellowLight: HTMLDivElement = document.querySelector("#yellow")!;
let greenLight: HTMLDivElement = document.querySelector("#green")!;

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
