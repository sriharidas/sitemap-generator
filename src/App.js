import "./App.css";
import React, { useState } from "react";
import Sitemap from "./Sitemap";

function App() {
  const [domain, setDomain] = useState("");
  // const [displayResult, setDisplayResult] = useState(false);
  return (
    <div className="App">
      {/* <header className="App-header">sitemap</header> */}
      <h1>SItemap generator</h1>
      <div>
        <input onChange={(e) => setDomain(e.target.value)} />
        <button>Search</button>
      </div>
      {console.log(domain)}
      {domain !== "" && <Sitemap url={domain} />}
    </div>
  );
}

export default App;
