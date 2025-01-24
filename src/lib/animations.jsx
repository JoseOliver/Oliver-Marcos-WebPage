import { smallSize, menuSize, smallMenuSize } from "../App";

export function handleMenuDrag(distance, api, smallMode) {
  if (distance < (!smallMode ? menuSize : smallMenuSize)) {
    api.start({
      to: {
        x: (!smallMode ? -menuSize : -smallMenuSize) + distance,
        opacity: 1,
      },
    });
  } else {
    api.start({
      to: {
        x: 0,
        opacity: 1,
      },
    });
  }
}
export function showMenu(api) {
  api.start({
    to: {
      x: 0,
      opacity: 1,
    },
  });
}
export function releaseMenu(api, smallMode) {
  api.start({
    to: {
      x: !smallMode ? -menuSize : -smallMenuSize,
      opacity: 0,
    },
  });
}
export function handleLogMenuDrag(distance, api, smallMode) {
  if (distance < (!smallMode ? menuSize : smallMenuSize)) {
    api.start({
      to: {
        x: window.visualViewport.width - distance,
        opacity: 1,
      },
    });
  } else {
    api.start({
      to: {
        x:
          window.visualViewport.width - (!smallMode ? menuSize : smallMenuSize),
        opacity: 1,
      },
    });
  }
}
export function showLogMenu(api, smallMode) {
  api.start({
    to: {
      x: !smallMode
        ? window.visualViewport.width - menuSize
        : window.visualViewport.width - smallMenuSize,
      opacity: 1,
    },
  });
}
export function releaseLogMenu(api) {
  api.start({
    to: {
      x: window.visualViewport.width,
      opacity: 0,
    },
  });
}
