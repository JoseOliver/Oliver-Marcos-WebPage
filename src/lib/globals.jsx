export function Variables() {}

export function toggle(state) {
  return !state;
}

export function renderMenuVisible(isMenuVisible) {
  if (!isMenuVisible) return "hidden ";
  else return "";
}
export function checkCloseMenuOnClick(target) {
  if (
    target.id !== "menuOpenerButton" &&
    target.id !== "menuOpener" &&
    target.id !== "menu" &&
    target.classList[0] !== "menuItem" &&
    typeof target.parentNode.className == "string" &&
    target.parentNode.className.split(" ")[0] !== "menuItem" // esto comprueba si la primera clase del padre es menuItem
  ) {
    return true;
  } else return false;
}
