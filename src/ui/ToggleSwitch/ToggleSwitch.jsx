import React from "react";
import "./ToggleSwitch.css";
import { Switch } from "@mui/material";

export const ToggleSwitch = (props) => {
  let label = props.label;
  let additionalClasses = props.className;
  let setValue = props.setValue || false;
  return (
    <>
      <div className={"flex items-center " + additionalClasses}>
        <span>{label}&emsp;</span>
        <label className="text-indigo-700 switch">
          <input
            type="checkbox"
            onChange={(e) => {
              if (setValue) {
                setValue(e.target.checked);
              }
            }}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
};
