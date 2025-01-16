import { handleMenuDrag, showMenu, releaseMenu } from "../../lib/animations";
import { closeMenuOnClick } from "../../lib/globals";
import { addMultipleListeners } from "../../lib/globals";

export function addEventsToMenu(props) {
  let { tapUp, tapDown, tracking, menuApi, setMenuVisible, smallMode } = props;
  // event handlers for menu movement
  const onMove = (evt) => {
    if (tapDown !== false) {
      let X;
      if (evt.type == "mousemove") X = evt.clientX;
      else if (evt.type == "touchmove") X = evt.touches[0].clientX;
      let distance = X - tapDown;
      if (tracking) handleMenuDrag(distance, menuApi, smallMode);
    }
  };
  const onDown = (evt) => {
    let X;
    if (evt.type == "mousedown") X = evt.clientX;
    else if (evt.type == "touchstart") X = evt.touches[0].clientX;
    tapDown = X;
    if (X < 50) {
      //antes PageX
      tracking = true;
    }
    closeMenuOnClick(evt.target, setMenuVisible, menuApi);
  };
  const onUp = (evt) => {
    let X;
    if (evt.type == "mouseup") X = evt.clientX;
    else if (evt.type == "touchend") X = evt.changedTouches[0].clientX;
    tapUp = X;
    let distance = tapUp - tapDown;
    if (tracking && distance >= 150) {
      showMenu(menuApi);
      setMenuVisible(true);
    }
    if (distance > 0 && distance < 150 && tracking) {
      releaseMenu(menuApi, smallMode);
      setMenuVisible(false);
    }
    if (distance < -100) {
      releaseMenu(menuApi, smallMode);
      setMenuVisible(false);
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
