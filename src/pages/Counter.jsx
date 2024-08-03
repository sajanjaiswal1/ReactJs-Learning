import { WindPower } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../components/layout/GlobalContext";

const Counter = () => {
let info = useContext(GlobalContext)


  let [count, setCount] = useState(0);
  let [data, setData] = useState(1000);

  useEffect(() => {
    window.alert("Count Updated");
  }, []);        //[data, count]

  return (
    



    <div className="text-center">
        {info.username},
        {info.email},
        {info.msg}


      <div className="text-center text-3xl">Counter:{count}</div>

      <button className="bg-blue-300" onClick={() => setCount(count++)}>
        Increase
      </button>
      <button className="bg-blue-300" onClick={() => setCount(count--)}>
        Decrease
      </button>

      <div className="text-center text-3xl">Counter:{data}</div>
      <button className="bg-blue-300" onClick={() => setData(data+2000)}>
        Add
      </button>
    </div>
  );
};

export default Counter;
