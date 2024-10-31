// import logo from "./logo.svg";
import "./App-TailWind.css";
import MenuIcon from "@mui/icons-material/Menu";

import { ToggleSwitch } from "./ui/ToggleSwitch/ToggleSwitch";
import { useState } from "react";
import { renderDarkMode, renderMenuVisible, toggle } from "./lib/globals";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  window.addEventListener("click", (event) => {
    if (
      event.target.id !== "menuOpener" &&
      event.target.id !== "menuOpenerButton" &&
      event.target.id !== "menu" &&
      event.target.classList[0] !== "menuItem" &&
      typeof event.target.parentNode.className == "string" &&
      event.target.parentNode.className.split(" ")[0] !== "menuItem" // esto comprueba si la primera clase del padre es menuItem
    ) {
      setMenuVisible(false);
    }
  });

  return (
    <div // body
      className={
        renderDarkMode(darkMode) +
        " dark:text-indigo-400 dark:bg-black big block"
      }
    >
      <header className="border flex justify-between items-center">
        <img
          src="./src/assets/brand_logo.png"
          width="150"
          alt=""
          className="rounded m-1"
        />
        <h1>Oliver Marcos</h1>
        <button
          id="menuOpenerButton"
          className="rounded w-20 h-20 flex justify-center items-center"
          onClick={() => setMenuVisible(toggle(menuVisible))}
        >
          <MenuIcon id="menuOpener" />
        </button>
      </header>
      <menu
        id="menu"
        className={
          renderMenuVisible(menuVisible) +
          "menu absolute w-80 dark:bg-white bg-gray-200 flex justify-between flex-col"
        }
      >
        <div className="menuItem">
          <h2>&nbsp;Lista del menu&nbsp;</h2>
          <p>a</p>
          <p>b</p>
          <p>c</p>
        </div>
        <ToggleSwitch label="Modo oscuro" setValue={setDarkMode} />
      </menu>
      <p>hello world</p>
    </div>
  );
}

export default App;
