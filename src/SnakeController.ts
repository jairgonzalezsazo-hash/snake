import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from "./Point";

class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;
  constructor(world: WorldModel, snake: Snake) {
    this.snakeWorld = world;
    this.slitherer = snake;
  }
  turnSnakeLeft(): void {
    this.slitherer.turnLeft();
  }
  turnSnakeRight(): void {
    this.slitherer.turnRight();
  }
  get snakePosition(): Point {
    return this.slitherer.position;
  }
  get snakeDirection(): number {
    return this.slitherer.direction;
  }
  get worldWidth(): number {
    return this.snakeWorld.width;
  }
  get worldHeight(): number {
    return this.snakeWorld.height;
  }
}

export default SnakeController;
