export function Variables() {}

export function toggle(state) {
  return !state;
}

export function renderDarkMode(darkMode) {
  if (darkMode) return "dark ";
  else return "";
}

export function renderMenuVisible(isMenuVisible) {
  if (!isMenuVisible) return "hidden ";
  else return "";
}
