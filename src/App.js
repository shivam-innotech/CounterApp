import React,{ useState} from "react";
import "./App.css";


function App() {
  const [count, setCount] = useState(0)
  const [data,setData]=useState([])
  const [intervalId, setIntervalId] = useState();

  const add=()=>{
    const newData={count:count,btn:intervalId}
    setData([...data,newData])
  }

  
  const startHandle  = (i) => {
     let updateItem=data.map((elm,ind)=>{
      if(ind===i) { 
        
       
      }return elm
     })
     console.log(updateItem)

     if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
     }

    const newIntervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    setIntervalId(newIntervalId);
  };
  

  return (
    <div>
      <div className="container-fluid d-flex justify-content-between mt-2">
        <button className="btn btn-dark add-counter" onClick={add}>Add Counter</button>
        <div className="showValue bg-dark  ">{count}</div>
      </div>
      <div className="container-fluid counters mt-2">
           {
             data.map((item,index)=>{
               
               return <div className="counters-child" key={index}>
               <button className="btn btn-light" type="button" onClick={()=>startHandle(index)}>
                 {
                   !intervalId ? "start":"stop"
                 }
               </button>
               <div className="timer bg-light text-dark mt-2 ">{count}</div>
             </div> 
             })
           }
      </div>
    </div>
  );
}

export default App;
