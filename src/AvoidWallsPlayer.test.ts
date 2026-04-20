import AvoidWallsPlayer from "./AvoidWallsPlayer";
import SnakeController from "./SnakeController";
import Snake from "./Snake";
import WorldModel from "./WorldModel";

describe("Avoid Walls Player Tests", function () {
  // to do left wall
  it("avoiding hitting the left wall", function () {
    let snake1 = new Snake("blue");
    let world = new WorldModel(snake1);
    let sc = new SnakeController(world, snake1);
    let player = new AvoidWallsPlayer(sc);
    snake1.turnLeft();
    snake1.move(snake1.position.x);
    player.makeTurn();
    let d = sc.snakeDirection;
    expect(d).toBe(1);
  });
  // to do right wall
  it("avoiding hitting the right wall", function () {
    let snake1 = new Snake("blue");
    let world = new WorldModel(snake1);
    let sc = new SnakeController(world, snake1);
    let player = new AvoidWallsPlayer(sc);
    snake1.turnRight();
    snake1.move(world.width - snake1.position.x);
    player.makeTurn();
    let d = sc.snakeDirection;
    expect(d).toBe(2);
  });
  // to do top wall
  it("avoiding hitting the top wall", function () {
    let snake1 = new Snake("blue");
    let world = new WorldModel(snake1);
    let sc = new SnakeController(world, snake1);
    let player = new AvoidWallsPlayer(sc);
    snake1.move(-snake1.position.y);
    player.makeTurn();
    let d = sc.snakeDirection;
    expect(d).toBe(1);
  });
  // to do bottom wall
  it("avoiding hitting the bottom wall", function () {
    let snake1 = new Snake("blue");
    let world = new WorldModel(snake1);
    let sc = new SnakeController(world, snake1);
    let player = new AvoidWallsPlayer(sc);
    snake1.turnRight();
    snake1.move(world.width - snake1.position.x);
    snake1.turnRight();
    snake1.move(world.height - snake1.position.y);
    player.makeTurn();
    let d = sc.snakeDirection;
    expect(d).toBe(3);
  });
  // if (snake1.position.y >= world.height / 2) {
  //   expect(snake1.direction).toBe(3);
  // } else {
  //   expect(snake1.direction).toBe(1);
  // }
  // snake1.turnLeft();
  // snake1.move(snake1.position.y);
  // player.makeTurn();
  // if (snake1.position.x >= world.width / 2) {
  //   expect(snake1.direction).toBe(2);
  // } else {
  //   expect(snake1.direction).toBe(4);
  // }
  // snake1.turnRight();
  // snake1.move(snake1.position.x);
  // player.makeTurn();
  // if (snake1.position.y >= world.height / 2) {
  //   expect(snake1.direction).toBe(3);
  // } else {
  //   expect(snake1.direction).toBe(1);
  // }
  // snake1.turnRight();
  // snake1.move(snake1.position.y);
  // player.makeTurn();
  // if (snake1.position.x >= world.width / 2) {
  //   expect(snake1.direction).toBe(2);
  // } else {
  //   expect(snake1.direction).toBe(4);
  // }
});
export {};
