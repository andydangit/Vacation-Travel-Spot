import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Data from "./Data";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState("light");

  const newData = Data.map((data) => {
    return <Card {...data} />;
  });

  function toogleColor() {
    if (darkMode === "light") {
      setDarkMode("dark");
    } else if (darkMode === "dark") {
      setDarkMode("light");
    }
  }

  return (
    <div className={`App ${darkMode}`}>
      <Navbar />
      <button onClick={toogleColor}>
        {`${darkMode === "light" ? "Light Mode" : "Dark Mode"}`}
      </button>
      <section> {newData} </section>
    </div>
  );
}

export default App;
