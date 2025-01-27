import { releaseMenu } from "./animations";
import { releaseLogMenu } from "./animations";

// toggle any boolean
export function toggle(state) {
  return !state;
}
// expand a class to all childs
export function propagateClass(myElement, myClass, toDo) {
  let children = myElement.children;
  for (let child = 0; child < children.length; child++) {
    if (toDo) children[child].classList.add(myClass);
    else children[child].classList.remove(myClass);
    if (children[child].hasChildNodes)
      propagateClass(children[child], myClass, toDo);
  }
}
// Evaluates if the screen width is upper a size or not
export function evaluateScreenWidthOver(size) {
  let screenSize = window.visualViewport.width;
  if (size <= screenSize) return false;
  else return true;
}
export function closeMenuOnClick(target, setMenuVisible, menuApi, smallMode) {
  // miro si se ha pulsado desde fuera del menu para cerrarlo...
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
    // cierra el menu si el elemento pulsado no es o no tiene como ancestro a menu
    releaseMenu(menuApi, smallMode);
    setMenuVisible(false);
  }
}
export function closeLogMenuOnClick(
  target,
  setLogMenuVisible,
  logMenuApi,
  smallMode
) {
  // miro si se ha pulsado desde fuera del menu para cerrarlo...
  let pointedElement = target;
  let isFather = false; // premisa no es menu
  if (pointedElement.classList.contains("logMenu")) {
    isFather = true; // si es menu
  }
  while (pointedElement.parentNode && pointedElement.tagName != "BODY") {
    if (pointedElement.id == "logMenuOpenerButton") return;
    if (pointedElement.classList.contains("logMenu")) {
      isFather = true; // si es menu
      break;
    } else {
      pointedElement = pointedElement.parentNode;
    }
  }
  if (!isFather) {
    // cierra el menu si el elemento pulsado no es o no tiene como ancestro a menu
    releaseLogMenu(logMenuApi);
    setLogMenuVisible(false);
  }
}
// Add a handler to multiple listeners
export function addMultipleListeners(element, events, handler, useCapture) {
  const addEvent = (one) => {
    element.addEventListener(one, (evt) => handler(evt), useCapture);
  };
  events.forEach(addEvent);
}
