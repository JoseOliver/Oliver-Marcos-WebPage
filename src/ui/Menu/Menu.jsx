import React, { useEffect, useState, useRef } from "react";
import { animated } from "@react-spring/web";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { handleMenuDrag, releaseMenu, showMenu } from "../../lib/animations";

const Menu = React.forwardRef((props, menuRef) => {
  let {
    menuSprings,
    menuApi,
    menuVisible,
    setMenuVisible,
    darkMode,
    setDarkMode,
  } = props;
  let tapDown = false,
    tapUp = false;
  let tracking = false;
  // event listeners for movement
  // on move
  window.addEventListener("mousemove", (evt) => {
    if (tapDown !== false) {
      let distance = evt.clientX - tapDown;
      if (tracking) handleMenuDrag(distance, menuApi);
    }
  });

  window.addEventListener("mousedown", (evt) => {
    // on mousedown
    tapDown = evt.clientX;
    if (evt.pageX < 50) {
      tracking = true;
    }
  });

  //on mouseup
  window.addEventListener("mouseup", (evt) => {
    tapUp = evt.clientX;
    let distance = tapUp - tapDown;
    if (tracking && distance > 0) {
      showMenu(menuApi);
      setMenuVisible(true);
    }
    if (distance > 0 && distance < 150 && tracking) {
      releaseMenu(menuApi);
      setMenuVisible(false);
    }
    if (distance < -100) {
      releaseMenu(menuApi);
      setMenuVisible(false);
    }
    tapDown = false;
    tapUp = false;
    tracking = false;
  });

  return (
    <animated.div
      id="menu"
      ref={menuRef}
      className="menu absolute dark:bg-white bg-gray-200 flex justify-between flex-col"
      style={menuSprings}
    >
      <div className="menuItem">
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
