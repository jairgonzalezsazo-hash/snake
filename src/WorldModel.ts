import Snake from "./Snake";
/** Class representing a worldmodel. */

class WorldModel {
  private slither: Snake;
  /**
   * Create a worldmodel.
   * @param reptile - the world of the WorldModel.
   */
  constructor(reptile: Snake) {
    this.slither = reptile;
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
}

export default WorldModel;
