import display from "./display";
class Engine {
  private engineType: number;

  constructor(engineType: number) {
    this.engineType = engineType;
  }

  public makeNoise() {
    if (this.engineType === 0) display("The engine makes no noise.");
    else if (this.engineType === 1) display("The engine goes PUUUURRRR....");
    else if (this.engineType === 2)
      display("The engine goes VROOOOOOOMMMMMM....");
    else
      display("The engine goes SOOOOMMMMMEEECOOOOOLLLLSSSOOOOUUUUNNNDDD......");
  }
}

export default Engine;
