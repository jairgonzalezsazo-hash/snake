import Snake from "./Snake";
import IWorldView from "./IWorldVeiw";
import Point from "./Point";
/** Class representing a worldmodel. */

class WorldModel {
  private allSnakesArr: Snake[] = [];
  private w: number;
  private h: number;
  private allViewsArr: IWorldView[] = [];
  /**
   * Create a worldmodel.
   * @param reptile - the world of the WorldModel.
   */
  constructor() {
    this.w = 7;
    this.h = 4;
  }
  /**
   * Updates the worldmodel for given number of steps.
   * @param steps - The number of steps to update the WorldModel
   */
  update(steps: number): void {
    this.allSnakes.forEach((s) => s.move);

    let collidedSnakes: Snake[] = [];

    for (let s1 of this.allSnakes) {
      for (let s2 of this.allSnakes) {
        if (s1.didCollide(s2)) {
          if (!collidedSnakes.includes(s1)) {
            collidedSnakes.push(s1);
          }
        }
      }
    }
    const collided: Snake[] = [];
    for (const a of this.allSnakes) {
      for (const b of this.allSnakes) {
        if (a.didCollide(b) && !collided.includes(a)) {
          collided.push(a);
        }
      }
    }

    this.allSnakesArr = this.allSnakes.filter(
      (s) => !collidedSnakes.includes(s),
    );
    this.allViewsArr.forEach((v) => v.display(this));
  }

  /**
   * Produces string representation of WorldModel
   * @return string representation of WorldModel
   */
  addSnake(s: Snake): void {
    this.allSnakesArr.push(s);
  }
  public get width(): number {
    return this.w;
  }
  public get height(): number {
    return this.h;
  }
  addView(v: IWorldView): void {
    this.allViewsArr.push(v);
  }
  public get allSnakes(): Snake[] {
    return this.allSnakesArr;
  }
  // update2(): void {
  //   if (this.worldView !== null) {
  //     this.worldView.display(this);
  //   }
  // }
}

export default WorldModel;
