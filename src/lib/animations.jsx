import { Opacity } from "@mui/icons-material";
import { useSpring, animated } from "@react-spring/web";

export function handleMenuDrag(distance, api) {
  if (distance < 300) {
    api.start({
      to: {
        x: -300 + distance,
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
export function releaseMenu(api) {
  api.start({
    to: {
      x: -300,
      opacity: 0,
    },
  });
}
