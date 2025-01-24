import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { animated } from "@react-spring/web";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { addEventsToMenu } from "./MenuEvents";
import "./menu.css";

const Menu = React.forwardRef((props, menuRef) => {
  // menu props
  let {
    menuSprings,
    menuApi,
    setMenuVisible,
    darkMode,
    setDarkMode,
    smallMode,
  } = props;
  // menu vars
  let tapDown = false,
    tapUp = false;
  let tracking = false;
  const navigate = useNavigate();
  // menu external funcs execute
  addEventsToMenu({
    tapUp,
    tapDown,
    tracking,
    menuApi,
    setMenuVisible,
    smallMode,
  });
  return (
    <animated.div
      id="menu"
      ref={menuRef}
      className="menu absolute dark:bg-slate-600 bg-slate-200 flex justify-between flex-col items-center w-48 sm:w-80"
      style={menuSprings}
    >
      <div className="menu-item">
        <div className="title menu-title underline text-lg sm:text-xl">
          &nbsp;Lista del menu&nbsp;
        </div>
        <Link
          className="menu-elem"
          to="/"
          onTouchStart={() => {
            navigate("/");
          }}
        >
          Home
        </Link>
        <Link
          className="menu-elem"
          to="/products"
          onTouchStart={() => {
            navigate("/products");
          }}
        >
          Productos
        </Link>
        <Link
          className="menu-elem"
          to="/about"
          onTouchStart={() => {
            navigate("/about");
          }}
        >
          Acerca de
        </Link>
      </div>
      <ToggleSwitch
        label="Modo oscuro"
        myValue={darkMode}
        storageName="darkMode"
        setValue={setDarkMode}
      />
    </animated.div>
  );
});

export default Menu;
