import Snake from "./Snake";
import WorldModel from "./WorldModel";

describe("WorldModel updates snake position", function () {
  it("WorldModel working well", function () {
    let s = new Snake("red");
    let w = new WorldModel(s);
    let x = w.snake.position.x;
    let y = w.snake.position.y;
    w.update(7);
    expect(w.snake.position.x).toBe(x);
    expect(w.snake.position.y).toBe(y - 7);
  });

  it("WorldModel has correct snake getter", function () {
    let s = new Snake("red");
    let w = new WorldModel(s);
    expect(w.snake).toBe(s);
  });
});
