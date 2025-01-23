// import logo from "./logo.svg";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import "./App-TailWind.css";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Menu from "./ui/Menu/Menu";
import LogMenu from "./ui/LogMenu/LogMenu";
import MenuIcon from "@mui/icons-material/Menu";
import LogIcon from "@mui/icons-material/Person";
import { releaseMenu, showMenu } from "./lib/animations";
import { releaseLogMenu, showLogMenu } from "./lib/animations";
import { useSpring } from "@react-spring/web";
import { evaluateScreenWidthOver, propagateClass } from "./lib/globals";

export function App() {
  // elements refs
  const bodyRef = useRef(null);
  const menuRef = useRef(null);
  const logMenuRef = useRef(null);
  const headerRef = useRef(null);
  // variables
  const smallSize = 600;
  const smallMenuSize = 200;
  const menuSize = 300;
  const startDarkModeValue =
    localStorage.getItem("darkMode") == "true" ? true : false || false;
  const openMenuFunc = () => {
    if (!menuVisible) {
      showMenu(menuApi);
      setMenuVisible(true);
    } else {
      releaseMenu(menuApi, smallMode);
      setMenuVisible(false);
    }
  };
  const openLogMenuFunc = () => {
    if (!logMenuVisible) {
      showLogMenu(logMenuApi, smallMode);
      setLogMenuVisible(true);
    } else {
      releaseLogMenu(logMenuApi);
      setLogMenuVisible(false);
    }
  };
  // hooks
  const [darkMode, setDarkMode] = useState(startDarkModeValue); // dark mode bool
  const [smallMode, setSmallMode] = useState(
    // small mode bool
    evaluateScreenWidthOver(smallSize)
  );
  const [menuVisible, setMenuVisible] = useState(false); // menu visibility bool
  const [logMenuVisible, setLogMenuVisible] = useState(false); // logMenu visibility bool
  // arbitrary init executions
  const navigate = useNavigate();
  window.history.pushState("", "", "/"); // disable navigation in this site
  const [menuSprings, menuApi] = useSpring(() => ({
    // menu animator init
    from: { x: !smallMode ? -menuSize : -smallMenuSize, opacity: 0 },
  }));
  const [logMenuSprings, logMenuApi] = useSpring(() => ({
    // menu animator init
    from: {
      x: window.visualViewport.width,
      opacity: 0,
    },
  }));
  // listener helpers
  window.addEventListener(
    // resize event for smallMode activation
    "resize",
    (evt) => {
      setSmallMode(evaluateScreenWidthOver(smallSize));
      releaseLogMenu(logMenuApi);
      setLogMenuVisible(false);
    },
    true
  );
  // effects
  useEffect(() => {
    // dark mode enabler
    let body = bodyRef.current;
    if (darkMode) body.classList.add("dark");
    else body.classList.remove("dark");
  }, [darkMode]);
  useEffect(() => {
    // small mode enabler
    let body = bodyRef.current;
    if (smallMode) {
      body.classList.add("small");
      propagateClass(body, "small", true);
    } else {
      body.classList.remove("small");
      propagateClass(body, "small", false);
    }
  }, [smallMode]);
  // App element definition
  return (
    <div // body
      ref={bodyRef}
      className="body dark:text-indigo-300 dark:bg-slate-800 big block"
    >
      <header
        className="border flex justify-between items-center bg-slate-200 dark:bg-black"
        ref={headerRef}
      >
        <img
          src="./src/assets/brand_logo.png"
          width="150"
          alt=""
          className="rounded m-1 fine-border small:w-12"
          onClick={() => navigate("/")}
        />
        <div className="title" onClick={() => navigate("/")}>
          Oliver Marcos
        </div>
        <div id="headerBotonera" className="flex">
          <button
            id="menuOpenerButton"
            className="rounded w-12 h-20 flex justify-center items-center"
            onClick={() => openMenuFunc()}
          >
            <MenuIcon id="menuOpener" />
          </button>
          <button
            id="logMenuOpenerButton"
            className="rounded w-12 h-20 flex justify-center items-center"
            onClick={() => openLogMenuFunc()}
          >
            <LogIcon id="logMenuOpener" />
          </button>
        </div>
      </header>
      <Menu
        ref={menuRef}
        menuSprings={menuSprings}
        menuApi={menuApi}
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        smallMode={smallMode}
      />
      <LogMenu
        ref={logMenuRef}
        logMenuSprings={logMenuSprings}
        logMenuApi={logMenuApi}
        logMenuVisible={logMenuVisible}
        setLogMenuVisible={setLogMenuVisible}
        smallMode={smallMode}
      />

      <Outlet />
    </div>
  );
}

export default App;
