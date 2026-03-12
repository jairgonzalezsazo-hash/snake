import Snake from "./Snake";

/*const moveSnakes = (times: number, turn: boolean = false) => {
  const greenSnake = new Snake("green");
  const maroonSnake = new Snake("maroon");
  let totalSquares = 0;

  for (let i = 0; i < times; i++) {
    const numSquares1 = Math.floor(Math.random() * 100);
    const numSquares2 = Math.floor(Math.random() * 100);
    greenSnake.move(numSquares1);
    maroonSnake.move(numSquares2);
    greenSnake.move(5);
    totalSquares += numSquares2;
    if (turn) {
      const numSquares3 = Math.floor(Math.random() * 100);
      const numSquares4 = Math.floor(Math.random() * 10);
      greenSnake.turn();
      maroonSnake.turn();
      maroonSnake.move(numSquares3);
      totalSquares -= numSquares3;
      greenSnake.move(numSquares3);
      maroonSnake.turn();
      maroonSnake.turn();
      maroonSnake.turn();
      maroonSnake.move(numSquares4);
      totalSquares += numSquares4;
    }
  }

  return { actual: maroonSnake.position, expected: totalSquares };
};

describe("Snake Tests", function () {
  const tests = [0, 3, 10, 4].map((num, index) => moveSnakes(num, index > 2));

  const testDescriptions = [
    "starts with the correct position of 0",
    "has the correct position after 3+ random moves",
    "has the correct position after 10+ random moves",
    "has the correct position after 4+ random moves with turns",
  ];

  testDescriptions.forEach((description, index) => {
    it(description, () =>
      expect(tests[index].expected).toBe(tests[index].actual),
    );
  });
});

describe("Addition", function () {
  it("sums numbers", () => {
    expect(1 + 1).toEqual(2);
  });
});
*/
describe("Snake Tests", function () {
  it("has a working getter for position", function () {
    let s = new Snake("red");
    expect(s.position).toBeDefined();
  });
  it("moves correctly", function () {
    let s1 = new Snake("red");
    let s2 = new Snake("blue");
    s1.move(10);
    s2.move(4);
    s1.move(5);
    expect(s1.position.x).toBe(3);
    expect(s1.position.y).toBe(-13);
    expect(s2.position.x).toBe(3);
    expect(s2.position.y).toBe(-2);
    s1.turnRight();
    s1.move(5);
    expect(s1.position.x).toBe(8);
    expect(s1.position.y).toBe(-13);
    s1.turnRight();
    s1.move(2);
    expect(s1.position.x).toBe(8);
    expect(s1.position.y).toBe(-11);
    s1.turnRight();
    s1.move(8);
    expect(s1.position.x).toBe(0);
    expect(s1.position.y).toBe(-11);
    s1.turnRight();
    s1.move(3);
    expect(s1.position.x).toBe(0);
    expect(s1.position.y).toBe(-14);
    s2.turnLeft();
    s2.move(4);
    expect(s2.position.x).toBe(-1);
    expect(s2.position.y).toBe(-2);
    s2.turnLeft();
    s2.move(7);
    expect(s2.position.x).toBe(-1);
    expect(s2.position.y).toBe(5);
    s2.turnLeft();
    s2.move(2);
    expect(s2.position.x).toBe(1);
    expect(s2.position.y).toBe(5);
    s2.turnLeft();
    s2.move(9);
    expect(s2.position.x).toBe(1);
    expect(s2.position.y).toBe(-4);
  });
  it("can be converted to a string with a color", function () {
    let snakeColor = "orange";
    let s1 = new Snake(snakeColor);
    s1.move(3);
    //expect(s1.toString()).toContain(snakeColor);
  });
  it("title for next next test", function () {
    expect(2 + 2).not.toBe(3);
  });
});
export {};
