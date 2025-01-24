import {
  handleLogMenuDrag,
  showLogMenu,
  releaseLogMenu,
} from "../../lib/animations";
import { closeLogMenuOnClick } from "../../lib/globals";
import { addMultipleListeners } from "../../lib/globals";

export function addEventsToLogMenu(props) {
  let { tapUp, tapDown, tracking, logMenuApi, setLogMenuVisible, smallMode } =
    props;
  // event handlers for menu movement
  const onMove = (evt) => {
    if (tracking) {
      let X = evt.layerX;
      let distance = tapDown - X;
      handleLogMenuDrag(distance, logMenuApi, smallMode);
    }
  };
  const onDown = (evt) => {
    let X = evt.layerX;
    if (
      X > window.visualViewport.width - 50 &&
      evt.target.id != "logMenuOpenerButton" &&
      evt.target.tagName != "svg" &&
      evt.target.tagName != "path"
    ) {
      tapDown = X;
      tracking = true;
    }
    closeLogMenuOnClick(evt.target, setLogMenuVisible, logMenuApi);
  };
  const onUp = (evt) => {
    if (tracking) {
      let X = evt.layerX;
      let openLimit = 150,
        smallOpenLimit = 80;
      tapUp = X;
      let distance = tapDown - tapUp;
      if (distance >= (!smallMode ? openLimit : smallOpenLimit)) {
        showLogMenu(logMenuApi, smallMode);
        setLogMenuVisible(true);
      }
      if (distance < (!smallMode ? openLimit : smallOpenLimit)) {
        releaseLogMenu(logMenuApi);
        setLogMenuVisible(false);
      }
      if (
        distance < -100 &&
        evt.target.tagName != "svg" &&
        evt.target.tagName != "path" &&
        evt.target.id != "logMenuOpenerButton"
      ) {
        releaseLogMenu(logMenuApi);
        setLogMenuVisible(false);
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
