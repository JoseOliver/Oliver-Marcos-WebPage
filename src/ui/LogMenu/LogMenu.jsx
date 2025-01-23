import React from "react";
import { animated } from "@react-spring/web";
import { addEventsToLogMenu } from "./LogMenuEvents";
import "./LogMenu.css";

const LogMenu = React.forwardRef((props, logMenuRef) => {
  // menu props
  let { logMenuSprings, logMenuApi, setLogMenuVisible, smallMode } = props;
  // menu vars
  let tapDown = false,
    tapUp = false;
  let tracking = false;
  // menu external funcs execute
  addEventsToLogMenu({
    tapUp,
    tapDown,
    tracking,
    logMenuApi,
    setLogMenuVisible,
    smallMode,
  });
  return (
    <animated.div
      id="logMenu"
      ref={logMenuRef}
      className="logMenu absolute flex justify-between flex-col items-center"
      style={logMenuSprings}
    >
      <div className="menuItem">
        <div className="title title-log-menu underline">
          &nbsp;Log menu&nbsp;
        </div>
      </div>
    </animated.div>
  );
});

export default LogMenu;
