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
    if (tapDown !== false) {
      let X;
      if (evt.type == "mousemove") X = evt.clientX;
      else if (evt.type == "touchmove") X = evt.touches[0].clientX;
      let distance = tapDown - X;
      if (tracking) handleLogMenuDrag(distance, logMenuApi, smallMode);
    }
  };
  const onDown = (evt) => {
    let X;
    if (evt.type == "mousedown") X = evt.clientX;
    else if (evt.type == "touchstart") X = evt.touches[0].clientX;
    tapDown = X;
    if (
      X > window.visualViewport.width - 50 &&
      evt.target.id != "logMenuOpenerButton" &&
      evt.target.tagName != "svg" &&
      evt.target.tagName != "path"
    ) {
      tracking = true;
    }
    closeLogMenuOnClick(evt.target, setLogMenuVisible, logMenuApi);
  };
  const onUp = (evt) => {
    let X;
    let openLimit = 150,
      smallOpenLimit = 80;
    if (evt.type == "mouseup") X = evt.clientX;
    else if (evt.type == "touchend") X = evt.changedTouches[0].clientX;
    tapUp = X;
    let distance = tapDown - tapUp;
    if (tracking && distance >= (!smallMode ? openLimit : smallOpenLimit)) {
      showLogMenu(logMenuApi, smallMode);
      setLogMenuVisible(true);
    }
    if (tracking && distance < (!smallMode ? openLimit : smallOpenLimit)) {
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
    tapDown = false;
    tapUp = false;
    tracking = false;
  };
  // add move listeners
  addMultipleListeners(window, ["touchmove", "mousemove"], onMove, true);
  // add down listeners
  addMultipleListeners(window, ["touchstart", "mousedown"], onDown, true);
  // add up listeners
  addMultipleListeners(window, ["touchend", "mouseup"], onUp, true);
}
