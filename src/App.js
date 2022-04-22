import React, {  useState } from "react";
import "./App.css";

function App() {
  const[data,setData]=useState([])
  const addBtn=()=>{
    const newData=
      {
      id: Math.random(),
      isStart : false, 
      interval: null,
      value: 0,
     }
    setData([...data,newData])
    
  }

  const startStopCounter = (timerCount)=>{
    let temp_state = [...data];
	let temp_element = { ...data[timerCount] };
	temp_element.isStart = !temp_element.isStart;
  temp_element.interval=setInterval(()=>{
    temp_element.value= temp_element.value++
  }, 1000)
  temp_state[timerCount] = temp_element;
	setData( temp_state );
 }
  return (
    <div>
      <div className="container-fluid d-flex justify-content-between mt-2">
        <button className="btn btn-dark add-counter" onClick={addBtn}>Add Counter</button>
        <div className="showValue bg-dark  ">{data.value}</div>
      </div>
      <div className="container-fluid counters mt-2">
        {
          data.map((item,index)=>{
            return <div className="counters-child" key={index}>
            <button className="btn btn-light" type="button" onClick={()=>startStopCounter(index)}>
              {
                !item.isStart ? "Start" : "Stop"
              }
            </button>
            <div className="timer bg-light text-dark mt-2 ">{item.value}</div>
          </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
