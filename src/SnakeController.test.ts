import Snake from "./Snake";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";

describe("Snake Controller Test", function () {
  // test position
  it("Get position returns position correctly", function () {
    let s = new Snake("red");
    let w = new WorldModel(s);
    let sc = new SnakeController(w, s);
    let pos = s.position;
    expect(pos).toBe(sc.snakePosition);
  });
  // test direction
  it("Get direction returns direction correctly", function () {
    let s = new Snake("red");
    let wm = new WorldModel(s);
    let sc = new SnakeController(wm, s);
    let dir = s.direction;
    expect(dir).toBe(sc.snakeDirection);
  });
  // test turn left
  it("turn left turns the snake left", function () {
    let s = new Snake("red");
    let wm = new WorldModel(s);
    let sc = new SnakeController(wm, s);
    let l = s.turnLeft();
    expect(l).toBe(sc.turnSnakeLeft());
  });
  // test turn right
  it("turn right turns the snake right", function () {
    let s = new Snake("red");
    let wm = new WorldModel(s);
    let sc = new SnakeController(wm, s);
    let r = s.turnRight();
    expect(r).toBe(sc.turnSnakeRight());
  });
  // test world width
  it("Get world width returns world width correctly", function () {
    let s = new Snake("red");
    let wm = new WorldModel(s);
    let sc = new SnakeController(wm, s);
    let w = wm.width;
    expect(w).toBe(sc.worldWidth);
  });
  // test world height
  it("Get world height returns world height correctly", function () {
    let s = new Snake("red");
    let wm = new WorldModel(s);
    let sc = new SnakeController(wm, s);
    let h = wm.height;
    expect(h).toBe(sc.worldHeight);
  });
});
