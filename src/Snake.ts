// import display from "./display";
import Point from "./Point";
// place your code on line 5 above the export statement below
/** Class representing a snake. */

class Snake {
  private currentPosition: Point;
  private currentDirection: number;
  private color: string;
  /**
   * Create a snake.
   * @param snakeColor - The color of the Snake.
   */
  constructor(snakeColor: string) {
    // 1 is up, 2 is right, 3 is down, 4 is left
    this.color = snakeColor;
    this.currentPosition = new Point(3, 2);
    this.currentDirection = 1;
  }
  /**
   * Moves the snake for the given number of squares.
   * @param squares - The number of squares to move the Snake.
   */
  move(squares: number): void {
    if (this.currentDirection === 1)
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y - squares,
      );
    else if (this.currentDirection === 2)
      this.currentPosition = new Point(
        this.currentPosition.x + squares,
        this.currentPosition.y,
      );
    else if (this.currentDirection === 3)
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y + squares,
      );
    else
      this.currentPosition = new Point(
        this.currentPosition.x - squares,
        this.currentPosition.y,
      );
  }
  turn(): void {
    if (this.currentDirection === 1) this.currentDirection = -1;
    else this.currentDirection = 1;
  }
  turnLeft(): void {
    if (this.currentDirection === 1) this.currentDirection = 4;
    else if (this.currentDirection === 2) this.currentDirection = 1;
    else if (this.currentDirection === 3) this.currentDirection = 2;
    else this.currentDirection = 3;
  }
  turnRight(): void {
    if (this.currentDirection === 1) this.currentDirection = 2;
    else if (this.currentDirection === 2) this.currentDirection = 3;
    else if (this.currentDirection === 3) this.currentDirection = 4;
    else this.currentDirection = 1;
  }
  /**
   * Produces string repesentation of Point
   * @return string repesentation of Point
   */
  public get position(): Point {
    return this.currentPosition;
  }
}

export default Snake;
