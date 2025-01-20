import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { animated } from "@react-spring/web";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { handleMenuDrag, releaseMenu, showMenu } from "../../lib/animations";
import { addEventsToMenu } from "./MenuEvents";
import "./menu.css";
import { Title } from "../../App";

const Menu = React.forwardRef((props, menuRef) => {
  // menu props
  let {
    menuSprings,
    menuApi,
    menuVisible,
    setMenuVisible,
    darkMode,
    setDarkMode,
    smallMode,
  } = props;
  // menu vars
  let tapDown = false,
    tapUp = false;
  let tracking = false;
  let menuSize;
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
      className="menu absolute dark:bg-slate-600 bg-slate-200 flex justify-between flex-col items-center"
      style={menuSprings}
    >
      <div className="menuItem">
        <Title className="title underline">&nbsp;Lista del menu&nbsp;</Title>
        <Link to="/">
          <p className="menu-elem">Home</p>
        </Link>
        <Link to="/products">
          <p className="menu-elem">Productos</p>
        </Link>
        <Link to="/about">
          <p className="menu-elem">Acerca de</p>
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
