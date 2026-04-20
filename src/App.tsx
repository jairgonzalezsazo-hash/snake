import "./App.css";
import { useEffect } from "react";
import ConsoleDisplay from "./ConsoleDisplay";
import display from "./display";
// import Car from "./Car";
// import Engine from "./Engine";
// import Duck from "./Duck";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    // display("hi");

    const greenSnake = new Snake("green");
    const violetSnake = new Snake("violet");
    greenSnake.move(10);
    display("Green snake moves forward:");
    display(
      "Green snake position:",
      "x",
      greenSnake.position.x,
      "and",
      "y",
      greenSnake.position.y,
    );
    greenSnake.turnRight();
    greenSnake.move(5);
    display("Green snake turns right and moves forward:");
    display(
      "Green snake position:",
      "x",
      greenSnake.position.x,
      "and",
      "y",
      greenSnake.position.y,
    );

    violetSnake.move(15);
    display("Violet snake moves forward:");
    display(
      "Violet snake position:",
      "x",
      violetSnake.position.x,
      "and",
      "y",
      violetSnake.position.y,
    );
    violetSnake.turnLeft();
    violetSnake.move(6);
    display("Violet snake turns left and moves forward:");
    display(
      "Violet snake position:",
      "x",
      violetSnake.position.x,
      "and",
      "y",
      violetSnake.position.y,
    );

    const purple = new WorldModel(violetSnake);
    purple.update(7);
    display("Purple world width:", purple.width);
    display("Purple world height:", purple.height);
    display("Violet snake moves forward in purple world:");

    const lime = new WorldModel(greenSnake);
    lime.update(5);
    display("Lime world width:", lime.width);
    display("Lime world height:", lime.height);
    display("Green snake moves forward in lime world:");
    const greenSnakeController = new SnakeController(lime, greenSnake);
    greenSnakeController.turnSnakeLeft();
    const violetSnakeController = new SnakeController(purple, violetSnake);
    violetSnakeController.turnSnakeRight();
    const aiPlayer = new AvoidWallsPlayer(violetSnakeController);
    // violetSnake.move(violetSnake.position.y);
    // display(violetSnake.direction, "direction");
    aiPlayer.makeTurn();
    // display(violetSnake.direction, "direction");
    // let redCarEngine = new Engine(1);
    // let blueCarEngine = new Engine(2);
    // let coolEngine = new Engine(3);
    // let redCar = new Car("red", redCarEngine);
    // let blueCar = new Car("blue", blueCarEngine);
    // redCar.drive(4);
    // blueCar.drive(10);
    // display("Changing Engines...");
    // redCar.engine = coolEngine;
    // blueCar.engine = redCarEngine;
    // redCar.drive(4);
    // blueCar.drive(10);
    // redCar.drive(40);
    // blueCar.drive(36);
    // redCar.drive(2);
    // display("Red car drove a total of:", redCar.miles, "miles");
    // display("Blue car drove a total of:", blueCar.miles, "miles");
    // redCar.miles = 80;
    // redCar.drive(20);
    // display("MILES", redCar.miles);
    // redCar.miles = -50;
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Type the following commands in the terminal:</p>
      <pre>
        ➜ /workspace git:(master) ✗ npm install -g typedoc
        <br />➜ /workspace git:(master) ✗ typedoc --out public/docs src/**.
        {"{ts, tsx}"}
      </pre>
      <p>
        Then visit the <a href="robots.txt">documentation</a>. Every time you
        update the doc comments, run the second command in the terminal.
      </p>
      <ConsoleDisplay />
    </div>
  );
}
