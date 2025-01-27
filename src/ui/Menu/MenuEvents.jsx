import { handleMenuDrag, showMenu, releaseMenu } from "../../lib/animations";
import { closeMenuOnClick } from "../../lib/globals";
import { addMultipleListeners } from "../../lib/globals";

export function addEventsToMenu(props) {
  let { tapUp, tapDown, tracking, menuApi, setMenuVisible, smallMode } = props;
  // event handlers for menu movement
  const onMove = (evt) => {
    if (tracking) {
      let X = evt.layerX;
      let distance = X - tapDown;
      handleMenuDrag(distance, menuApi, smallMode);
    }
  };
  const onDown = (evt) => {
    let X = evt.layerX;
    if (X < 50) {
      tapDown = X;
      tracking = true;
    }
    closeMenuOnClick(evt.target, setMenuVisible, menuApi, smallMode);
  };
  const onUp = (evt) => {
    if (tracking) {
      let X = evt.layerX;
      let openLimit = 150,
        smallOpenLimit = 80;
      tapUp = X;
      let distance = tapUp - tapDown;
      if (distance >= (!smallMode ? openLimit : smallOpenLimit)) {
        showMenu(menuApi);
        setMenuVisible(true);
      }
      if (
        distance > 0 &&
        distance < (!smallMode ? openLimit : smallOpenLimit)
      ) {
        releaseMenu(menuApi, smallMode);
        setMenuVisible(false);
      }
      if (distance < -100) {
        releaseMenu(menuApi, smallMode);
        setMenuVisible(false);
      }
    }
    tapDown = false;
    tapUp = false;
    tracking = false;
  };
  // add move listeners
  window.addEventListener("pointermove", onMove, true);
  // add down listeners
  window.addEventListener("pointerdown", onDown, true);
  // add up listeners
  window.addEventListener("pointerup", onUp, true);
}
