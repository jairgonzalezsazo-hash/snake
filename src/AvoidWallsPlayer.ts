import Player from "./Player";
import SnakeController from "./SnakeController";

class AvoidWallsPlayer extends Player {
  constructor(sc: SnakeController) {
    super(sc);
  }
  makeTurn(): void {
    // 1 is up, 2 is right, 3 is down, 4 is left
    // left wall
    if (this.sc.snakeDirection === 4 && this.sc.snakePosition.x === 0) {
      if (this.sc.snakePosition.y >= this.sc.worldHeight / 2) {
        this.sc.turnSnakeRight();
      } else {
        this.sc.turnSnakeLeft();
      }
    }
    // right wall
    else if (
      this.sc.snakeDirection === 2 &&
      this.sc.snakePosition.x === this.sc.worldWidth - 1
    ) {
      if (this.sc.snakePosition.y >= this.sc.worldHeight / 2) {
        this.sc.turnSnakeLeft();
      } else {
        this.sc.turnSnakeRight();
      }
    }
    // top wall
    else if (this.sc.snakeDirection === 1 && this.sc.snakePosition.y === 0) {
      if (this.sc.snakePosition.x >= this.sc.worldWidth / 2) {
        this.sc.turnSnakeLeft();
      } else {
        this.sc.turnSnakeRight();
      }
    }
    // buttom wall
    else if (
      this.sc.snakeDirection === 3 &&
      this.sc.snakePosition.y === this.sc.worldHeight - 1
    ) {
      if (this.sc.snakePosition.x >= this.sc.worldWidth / 2) {
        this.sc.turnSnakeRight();
      } else {
        this.sc.turnSnakeLeft();
      }
    }
  }
}

export default AvoidWallsPlayer;
