// import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  private color: string;
  constructor(snakeColor: string) {
    this.color = snakeColor;
    this.currentPosition = 0;
    this.currentDirection = 1;
  }
  move(squares: number): void {
    if (this.currentDirection === 1)
      this.currentPosition = this.currentPosition + squares;
    else this.currentPosition = this.currentPosition - squares;
  }
  turn(): void {
    if (this.currentDirection === 1) this.currentDirection = -1;
    else this.currentDirection = 1;
  }
  public get position(): number {
    return this.currentPosition;
  }
}

export default Snake;
