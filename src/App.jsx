import logo from "./logo.svg";
import "./App-TailWind.css";
import { ToggleSwitch } from "./ui/ToggleSwitch/ToggleSwitch";
import { useState, useEffect } from "react";
import { toggleDarkMode } from "./lib/globals";

function App() {
  const [darkMode, setDarkMode] = useState("");

  return (
    <div
      className={
        toggleDarkMode(darkMode) + "dark:text-indigo-700 dark:bg-black big"
      }
    >
      <p>hello world</p>
      <ToggleSwitch label="Modo oscuro" setValue={setDarkMode} />
    </div>
  );
}

export default App;
