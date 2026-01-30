import display from "./display";
// import IDrivable from "./IDrivable";
import Engine from "./Engine";
// place your code on line 5 above the export statement below

// modified in Car.ts
class Car {
  private totalMiles: number;
  private color: string;
  private eng: Engine;
  constructor(carColor: string) {
    this.totalMiles = 0;
    this.color = carColor;
    this.eng = new Engine(Math.floor(4 * Math.random()));
  }
  drive(miles: number): void {
    display("The", this.color, "car drives", miles, "miles");
    this.eng.makeNoise();
    this.totalMiles = this.totalMiles + miles;
  }
  public get miles() {
    return this.totalMiles;
  }
  public set miles(newTotalMiles: number) {
    if (newTotalMiles >= 0) {
      this.totalMiles = newTotalMiles;
    } else {
      display("Disregarding attempt to set miles to negative number");
    }
  }
}

export default Car;
