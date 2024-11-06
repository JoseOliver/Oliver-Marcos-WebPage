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
