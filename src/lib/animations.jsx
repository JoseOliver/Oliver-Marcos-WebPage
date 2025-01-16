import { Opacity } from "@mui/icons-material";
import { useSpring, animated } from "@react-spring/web";

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
