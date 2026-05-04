import Player from "./Player";
import SnakeController from "./SnakeController";
import IInputHandler from "./IInputHandler";
class HumanPlayer extends Player {
  private inputHandler: IInputHandler;

  constructor(controller: SnakeController, inputHandler: IInputHandler) {
    super(controller);
    this.inputHandler = inputHandler;
  }

  makeTurn(): void {
    if (this.inputHandler.madeLeftMove()) {
      this.sc.turnSnakeLeft();
      this.inputHandler.resetLeftMove();
    } else if (this.inputHandler.madeRightMove()) {
      this.sc.turnSnakeRight();
      this.inputHandler.resetRightMove();
    }
  }
}

export default HumanPlayer;
