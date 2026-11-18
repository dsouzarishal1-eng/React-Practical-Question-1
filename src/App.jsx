
import React, { useState } from 'react';

import StudentProps from './Props';
import DefaultProps from './DefaultProps';
import ThisOperator from './ThisOperator';

function App() {
  const [program, setProgram] = useState("props");

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>

      <h1>React Practical - Question 1</h1>

      <button onClick={() => setProgram("props")}>
        Props
      </button>

      <button onClick={() => setProgram("default")}>
        Default Properties
      </button>

      <button onClick={() => setProgram("this")}>
        This Operator
      </button>

      <hr />

      {program === "props" && (
        <StudentProps name="Rahul" age={20} />
      )}

      {program === "default" && (
        <DefaultProps />
      )}

      {program === "this" && (
        <ThisOperator />
      )}

    </div>
  );
}

export default App;
