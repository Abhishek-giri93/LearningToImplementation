
import { useState, useEffect } from "react";
import Timer from "./Timer";


function Counter() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log("Hello, This is the function inside counter.");
    return () => {
      console.log("This is the cleanup function.");
    }

  })
  return (
    <>
      <h2>count : {count}</h2>
      <button
        className="btn btn-primary"
        onClick={() => setCount((c) => c + 1)}
      >Count</button>
    </>
  )
}

export default function App() {

  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "20px" }}>

      {show && <Counter />}

      <Timer />
    </div>
  );
}
