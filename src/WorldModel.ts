import Snake from "./Snake";
/** Class representing a worldmodel. */

class WorldModel {
  private slither: Snake;
  private w: number;
  private h: number;
  /**
   * Create a worldmodel.
   * @param reptile - the world of the WorldModel.
   */
  constructor(reptile: Snake) {
    this.slither = reptile;
    this.w = 7;
    this.h = 4;
  }
  /**
   * Updates the worldmodel for given number of steps.
   * @param steps - The number of steps to update the WorldModel
   */
  update(steps: number): void {
    this.slither.move(steps);
  }
  /**
   * Produces string representation of WorldModel
   * @return string representation of WorldModel
   */
  public get snake(): Snake {
    return this.slither;
  }
  public get width(): number {
    return this.w;
  }
  public get height(): number {
    return this.h;
  }
}

export default WorldModel;
