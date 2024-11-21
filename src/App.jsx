// import logo from "./logo.svg";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./App-TailWind.css";
import { useState, useEffect, useRef } from "react";
import Menu from "./ui/Menu/Menu";
import Index from "./ui/Index/Index";
import MenuIcon from "@mui/icons-material/Menu";
import { releaseMenu, showMenu } from "./lib/animations";
import { useSpring } from "@react-spring/web";

function App() {
  // elements refs
  const bodyRef = useRef(null);
  const menuRef = useRef(null);
  // variables
  // hooks
  const [darkMode, setDarkMode] = useState(false); // dark mode bool
  const [menuVisible, setMenuVisible] = useState(false); // menu visibility bool
  const [menuSprings, menuApi] = useSpring(() => ({
    // menu animator
    from: { x: -300 },
  }));
  // effects
  useEffect(() => {
    // dark mode enabler
    let body = bodyRef.current;
    if (darkMode) body.classList.add("dark");
    else body.classList.remove("dark");
  }, [darkMode]);

  return (
    <div // body
      ref={bodyRef}
      className="dark:text-indigo-300 dark:bg-slate-800 big block"
    >
      <header className="border flex justify-between items-center bg-slate-200 dark:bg-black">
        <img
          src="./src/assets/brand_logo.png"
          width="150"
          alt=""
          className="rounded m-1 fine-border"
        />
        <h1>Oliver Marcos</h1>
        <button
          id="menuOpenerButton"
          className="rounded w-20 h-20 flex justify-center items-center"
          onClick={() => {
            if (!menuVisible) {
              showMenu(menuApi);
              setMenuVisible(true);
            } else {
              releaseMenu(menuApi);
              setMenuVisible(false);
            }
          }}
        >
          <MenuIcon id="menuOpener" />
        </button>
      </header>
      <Menu
        ref={menuRef}
        menuSprings={menuSprings}
        menuApi={menuApi}
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        setDarkMode={setDarkMode}
      />

      <Outlet />
    </div>
  );
}

export default App;
