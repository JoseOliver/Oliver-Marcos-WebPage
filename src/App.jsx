// import logo from "./logo.svg";
import "./App-TailWind.css";
import MenuIcon from "@mui/icons-material/Menu";

import { ToggleSwitch } from "./ui/ToggleSwitch/ToggleSwitch";
import { useState } from "react";
import { renderDarkMode, renderMenuVisible, toggle } from "./lib/globals";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div // body
      className={
        renderDarkMode(darkMode) +
        " dark:text-indigo-400 dark:bg-black big block"
      }
    >
      <header className="flex justify-between items-center">
        <img
          src="./assets/brand_logo.png"
          width="150"
          alt=""
          className="rounded m-1"
        />
        <h1>Oliver Marcos Company</h1>
        <button
          className="rounded"
          onClick={() => setMenuVisible(toggle(menuVisible))}
        >
          <MenuIcon className="m-5" />
        </button>
      </header>
      <menu
        className={
          renderMenuVisible(menuVisible) +
          "absolute menu w-80 dark:bg-white bg-gray-200 flex justify-between flex-col"
        }
      >
        <div>
          <h2>&nbsp;Lista del menu&nbsp;</h2>
          <p>a</p>
          <p>b</p>
          <p>c</p>
        </div>
        <ToggleSwitch
          label="Modo oscuro"
          setValue={setDarkMode}
          className="pt-20"
        />
      </menu>
      <p>hello world</p>
    </div>
  );
}

export default App;
