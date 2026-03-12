import "./App.css";
import { useEffect } from "react";
import ConsoleDisplay from "./ConsoleDisplay";
import display from "./display";
import Car from "./Car";
import Engine from "./Engine";
// import Duck from "./Duck";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hi");

    const greenSnake = new Snake("green");
    const violetSnake = new Snake("violet");
    greenSnake.move(10);
    violetSnake.move(15);
    display("Green snake moves forward:", greenSnake.position);
    display("Violet snake moves forward:", violetSnake.position);
    greenSnake.turn();
    greenSnake.move(12);
    display("Green snake moves forward:", greenSnake.position);
    const purple = new WorldModel(violetSnake);
    purple.update(7);
    const lime = new WorldModel(greenSnake);
    lime.update(5);
    display(purple.snake.position);
    let redCarEngine = new Engine(1);
    let blueCarEngine = new Engine(2);
    let coolEngine = new Engine(3);
    let redCar = new Car("red", redCarEngine);
    let blueCar = new Car("blue", blueCarEngine);
    redCar.drive(4);
    blueCar.drive(10);
    display("Changing Engines...");
    redCar.engine = coolEngine;
    blueCar.engine = redCarEngine;
    redCar.drive(4);
    blueCar.drive(10);
    redCar.drive(40);
    blueCar.drive(36);
    redCar.drive(2);
    display("Red car drove a total of:", redCar.miles, "miles");
    display("Blue car drove a total of:", blueCar.miles, "miles");
    redCar.miles = 80;
    redCar.drive(20);
    display("MILES", redCar.miles);
    redCar.miles = -50;
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
