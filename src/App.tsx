import "./App.css";
import { useEffect } from "react";
import ConsoleDisplay from "./ConsoleDisplay";
import display from "./display";
import Car from "./Car";
// import Duck from "./Duck";
import Snake from "./Snake";

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    const greenSnake = new Snake("green");
    const violetSnake = new Snake("violet");
    greenSnake.move(10);
    violetSnake.move(15);
    display("Green snake moves forward:", greenSnake.position);
    display("Violet snake moves forward:", violetSnake.position);
    greenSnake.turn();
    greenSnake.move(12);
    display("Green snake moves forward:", greenSnake.position);
    const redCar = new Car("red");
    const blueCar = new Car("blue");
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
