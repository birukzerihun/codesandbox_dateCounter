import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  function addCount() {
    setCount((c) => c + step);
  }
  function subCount() {
    setCount((c) => c - step);
  }
  function addStep() {
    setStep((s) => s + 1);
  }
  function subStep() {
    setStep((s) => s - 1);
  }

  const date = new Date(" june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={addStep}>+</button>
        Step: {step}
        <button onClick={subStep}>-</button>
      </div>
      <div>
        <button onClick={addCount}>+</button>
        Counter: {count}
        <button onClick={subCount}>-</button>
      </div>
      <span>
        {count === 0
          ? "today is "
          : count > 0
          ? `${count} days from now is `
          : `${count} days ago is `}
      </span>

      <span>{date.toDateString()}</span>
    </div>
  );
}
