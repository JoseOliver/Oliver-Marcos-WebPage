import { findDOMNode } from "react";

export function Variables() {}

export function toggleDarkMode(darkMode) {
  if (darkMode) return "dark ";
  else return "";
}
