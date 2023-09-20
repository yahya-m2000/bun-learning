import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/pets");
      const data = await res.json(); // Parse the JSON response
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {data.map((item, i) => {
        return <p>{item.type}</p>;
      })}
      <p>Test</p>
    </div>
  );
}

export default App;
