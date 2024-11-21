import { releaseMenu } from "./animations";

export function Variables() {}

export function toggle(state) {
  return !state;
}

export function renderMenuVisible(isMenuVisible) {
  if (!isMenuVisible) return "hidden ";
  else return "";
}
export function closeMenuOnClick(target, setMenuVisible, menuApi) {
  // voy a ver si se ha pulsado desde fuera del menu para cerrarlo...
  let pointedElement = target;
  let isFather = false; // premisa no es menu
  if (pointedElement.classList.contains("menu")) {
    isFather = true; // si es menu
  }
  while (pointedElement.parentNode && pointedElement.tagName != "BODY") {
    if (pointedElement.id == "menuOpenerButton") return;
    if (pointedElement.classList.contains("menu")) {
      isFather = true; // si es menu
      break;
    } else {
      pointedElement = pointedElement.parentNode;
    }
  }
  if (!isFather) {
    // cierra el menu si el pulsado no es o no tiene como ancestro a menu
    releaseMenu(menuApi);
    setMenuVisible(false);
  }
}
