let size = 300,
  smallSize = 200;

export function handleMenuDrag(distance, api, smallMode) {
  if (distance < (!smallMode ? size : smallSize)) {
    api.start({
      to: {
        x: (!smallMode ? -size : -smallSize) + distance,
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
      x: !smallMode ? -size : -smallSize,
      opacity: 0,
    },
  });
}
export function handleLogMenuDrag(distance, api, smallMode) {
  if (distance < (!smallMode ? size : smallSize)) {
    api.start({
      to: {
        x: window.visualViewport.width - distance,
        opacity: 1,
      },
    });
  } else {
    api.start({
      to: {
        x: window.visualViewport.width - (!smallMode ? size : smallSize),
        opacity: 1,
      },
    });
  }
}
export function showLogMenu(api, smallMode) {
  api.start({
    to: {
      x: !smallMode
        ? window.visualViewport.width - size
        : window.visualViewport.width - smallSize,
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
