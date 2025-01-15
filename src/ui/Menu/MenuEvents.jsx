import { handleMenuDrag, showMenu, releaseMenu } from "../../lib/animations";
import { closeMenuOnClick } from "../../lib/globals";

export function addEventsToMenu(
  tapUp,
  tapDown,
  tracking,
  menuApi,
  setMenuVisible
) {
  // func to add a handler to multiple listeners
  const addMultipleListeners = (element, events, handler, useCapture) => {
    const addEvent = (one) => {
      element.addEventListener(one, (evt) => handler(evt), useCapture);
    };
    events.forEach(addEvent);
  };

  // event handlers for movement
  const onMove = (evt) => {
    if (tapDown !== false) {
      let X;
      if (evt.type == "mousemove") X = evt.clientX;
      else if (evt.type == "touchmove") X = evt.touches[0].clientX;
      let distance = X - tapDown;
      if (tracking) handleMenuDrag(distance, menuApi);
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
  };

  // add move listeners
  addMultipleListeners(window, ["touchmove", "mousemove"], onMove, true);
  // add down listeners
  addMultipleListeners(window, ["touchstart", "mousedown"], onDown, true);
  // add up listeners
  addMultipleListeners(window, ["touchend", "mouseup"], onUp, true);
}
