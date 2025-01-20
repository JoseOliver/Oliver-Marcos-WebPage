import React from "react";
import "./ToggleSwitch.css";
import { Switch } from "@mui/material";

export const ToggleSwitch = (props) => {
  let label = props.label;
  let myValue = props.myValue || false;
  let additionalClasses = props.className;
  let setValue = props.setValue || false;
  let storageName = props.storageName || false;
  return (
    <div className={"menuItem flex items-center " + additionalClasses}>
      <span className="menuItem">{label}&emsp;</span>
      <label className="text-indigo-700 switch">
        <input
          className="menuItem"
          type="checkbox"
          checked={myValue}
          onChange={() => {
            if (setValue) {
              setValue(!myValue);
            }
            if (storageName) {
              localStorage.setItem(storageName, !myValue);
            }
          }}
        />
        <span className="menuItem slider round"></span>
      </label>
    </div>
  );
};
