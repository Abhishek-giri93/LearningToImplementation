
import { useState, useEffect } from "react";
import Timer from "./Timer";
import College from "./College";
import { SubjectContext } from "./ContextData";


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
  const [subject, setSubject] = useState("");

  return (
    // <div style={{ padding: "20px" }}>

    //   {show && <Counter />}

    //   <Timer />
    // </div>
    <div>

      <SubjectContext.Provider value={subject}>
        <select name="subjects" id="subjects" onChange={(event) => setSubject(event.target.value)}>
          <option value="Maths">Maths</option>
          <option value="English">English</option>
          <option value="Science">Science</option>
        </select>
        {/* <button>Subject</button> */}
        <College />
      </SubjectContext.Provider>
      
    </div>
  );
}
