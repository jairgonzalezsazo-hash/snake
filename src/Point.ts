/** Class representing a point.*/
class Point {
  private xcoord: number;
  private ycoord: number;
  /**
   * Create a point.
   * @param x - the x coord of the point.
   * @param y - the y coord of the point.
   */
  constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }
  /**
   * the x coord for the point.
   */
  public get x(): number {
    return this.xcoord;
  }
  /**
   * the y coord for the point.
   */
  public get y(): number {
    return this.ycoord;
  }
}

export default Point;
