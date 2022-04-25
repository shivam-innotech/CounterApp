import React, { useState } from "react";
import "./App.css";
import TimerCount from "./components/TimerCount";

function App() {
  const [data, setData] = useState([]);

  const addBtn = () => {
    setData((prev) => [...prev, { id: Math.random() }]);
  };

  return (
    <div>
      <div className="container-fluid d-flex justify-content-between mt-2">
        <button className="btn btn-dark add-counter" onClick={addBtn}>
          Add Counter
        </button>
        <div className="showValue bg-dark  ">total</div>
      </div>
      <div className="container-fluid counters mt-2">
        {data?.map((value) => {
          return (
            <div className="counters-child" key={value.id}>
              <TimerCount />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
