import React, { useEffect, useState, useRef } from "react";
import { animated } from "@react-spring/web";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { handleMenuDrag, releaseMenu, showMenu } from "../../lib/animations";
import { addEventsToMenu } from "./MenuEvents";
import "./menu.css";

const Menu = React.forwardRef((props, menuRef) => {
  // menu props
  let {
    menuSprings,
    menuApi,
    menuVisible,
    setMenuVisible,
    darkMode,
    setDarkMode,
  } = props;
  // menu vars
  let tapDown = false,
    tapUp = false;
  let tracking = false;
  // menu external funcs execute
  addEventsToMenu(tapUp, tapDown, tracking, menuApi, setMenuVisible);
  return (
    <animated.div
      id="menu"
      ref={menuRef}
      className="menu absolute dark:bg-slate-200 bg-slate-200 flex justify-between flex-col items-center"
      style={menuSprings}
    >
      <div className="menuItem text-black">
        <h2>&nbsp;Lista del menu&nbsp;</h2>
        <p>a</p>
        <p>b</p>
        <p>c</p>
      </div>
      <ToggleSwitch label="Modo oscuro" setValue={setDarkMode} />
    </animated.div>
  );
});

export default Menu;
