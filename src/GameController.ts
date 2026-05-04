import Player from "./Player";
import WorldModel from "./WorldModel";

class GameController {
  private world: WorldModel;
  private player1: Player | null = null;
  private player2: Player | null = null;

  constructor(world: WorldModel) {
    this.world = world;
  }

  setPlayer1(player: Player): void {
    this.player1 = player;
  }

  setPlayer2(player: Player): void {
    this.player2 = player;
  }

  run(): void {
    let lastTime = 0;

    const updateFrame = (currentTime: number) => {
      // 1. Players make moves
      this.player1?.makeTurn();
      this.player2?.makeTurn();

      // 2. Time-based update
      if (currentTime - lastTime > 250) {
        this.world.update(1);
        lastTime += 250;
      }

      // 3. Loop
      requestAnimationFrame(updateFrame);
    };

    requestAnimationFrame(updateFrame);
  }
}
export default GameController;
