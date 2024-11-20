import { handleMenuDrag, showMenu, releaseMenu } from "../../lib/animations";

export function addEventsToMenu(
  tapUp,
  tapDown,
  tracking,
  menuApi,
  setMenuVisible
) {
  // event listeners for movement
  window.addEventListener("mousemove", (evt) => {
    // on move
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
    // voy a ver si se ha pulsado desde fuera del menu para cerrarlo...
    let pointedElement = evt.target;
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
  });
  window.addEventListener("mouseup", (evt) => {
    //on mouseup
    tapUp = evt.clientX;
    let distance = tapUp - tapDown;
    if (tracking && distance > 150) {
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
}
