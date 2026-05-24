// import display from "./display";
import Point from "./Point";
// place your code on line 5 above the export statement below
/** Class representing a snake. */

class Snake {
  private currentParts: Point[];
  private currentDirection: number;
  private color: string;
  /**
   * Create a snake.
   * @param snakeColor - The color of the Snake.
   */
  constructor(snakeColor: string, startPosition: Point, size: number) {
    this.color = snakeColor;
    this.currentDirection = 1;
    this.currentParts = [startPosition];

    this.currentParts.push(startPosition);

    for (let i = 1; i < size; i++) {
      this.currentParts.push(new Point(startPosition.x - i, startPosition.y));
    }
  }
  /**
   * Moves the snake for the given number of squares.
   * @param squares - The number of squares to move the Snake.
   */
  move(squares: number): void {
    for (let i = this.currentParts.length - 1; i >= 1; i--) {
      this.currentParts[i] = this.currentParts[i - 1];
    }

    let head = this.currentParts[0];
    // 1 is up, 2 is right, 3 is down, 4 is left
    switch (this.currentDirection) {
      case 1: // up
        this.currentParts[0] = new Point(head.x, head.y - 1);
        break;
      case 2: // right
        this.currentParts[0] = new Point(head.x + 1, head.y);
        break;
      case 3: // down
        this.currentParts[0] = new Point(head.x, head.y + 1);
        break;
      case 4: // left
        this.currentParts[0] = new Point(head.x - 1, head.y);
        break;
    }
  }

  /**
   * Produces string repesentation of Point
   * @return string repesentation of Point
   */
  public didCollide(s: Snake): boolean {
    let partsToCheck = this === s ? s.allParts.slice(1) : s.allParts;
    for (let p of partsToCheck) {
      if (this.position.equals(p)) {
        return true;
      }
    }
    return false;
  }
  public get position(): Point {
    return this.currentParts[0];
  }
  public get allParts(): Point[] {
    return this.currentParts;
  }
  public get direction(): number {
    return this.currentDirection;
  }
}

export default Snake;
