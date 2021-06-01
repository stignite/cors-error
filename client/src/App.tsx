import React, { useState } from "react";
import "./App.css";

const baseURL = "http://localhost:4000/";

function App() {
  const [res, setRes] = useState<{ data: number[] } | null>(null);

  const fetchData = async (url: string) => {
    try {
      const _res = await fetch(`${baseURL}${url}`).then((d) => d.json());
      setRes(_res);
    } catch (err) {
      setRes(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => fetchData("err")}>
          Trigger 500 response without CORS headers
        </button>
        <button onClick={() => fetchData("err-cors")}>
          Trigger 500 response with CORS headers
        </button>
        <button onClick={() => fetchData("data")}>
          Trigger 200 response with CORS headers
        </button>
        {res ? <p>{JSON.stringify(res, null, 4)}</p> : <p>No data.</p>}
      </header>
    </div>
  );
}

export default App;
