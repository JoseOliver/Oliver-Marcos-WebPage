import React, { useRef } from "react";
import "./ToggleSwitch.css";
import { Switch } from "@mui/material";

export const ToggleSwitch = (props) => {
  let label = props.label;
  let myValue = props.myValue || false;
  let additionalClasses = props.className;
  let setValue = props.setValue || false;
  let storageName = props.storageName || false;
  let inputRef = useRef(null);
  const changeFunc = () => {
    if (setValue) {
      setValue(!myValue);
    }
    if (storageName) {
      localStorage.setItem(storageName, !myValue);
    }
  };
  return (
    <div
      className={"menuItem flex items-center " + additionalClasses}

      // onTouchStart={() => changeFunc()}
      // onMouseDown={() => changeFunc()}
    >
      <span className="menuItem pr-2" onClick={() => changeFunc()}>
        {label}
      </span>
      <label className="text-indigo-700 switch">
        <input
          ref={inputRef}
          className="menuItem"
          type="checkbox"
          checked={myValue}
          onChange={() => {
            changeFunc();
          }}
        />
        <span className="menuItem slider round"></span>
      </label>
    </div>
  );
};
