 import {  useEffect, useRef, useState } from "react";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import {
  canMove,
  isCoord,
  isEqualCoord,
  isPieceType,
} from "./chessboard-colored-drop-targets.jsx";
 

function getColor(state, isDark) {
  if (state === "validMove") {
    return "lightgreen";
  } else if (state === "invalidMove") {
    return "pink";
  }
  return isDark ? "lightgrey" : "white";
}

function Square({ pieces, setPieces, location, children }) {
  const ref = useRef(null);
  const [state, setState] = useState ("idle");

  useEffect(() => {
    const el = ref.current; 

    return dropTargetForElements({
      element: el,
      getData: ()=> ({location}),
      canDrop: ({ source }) => {
        if (!isCoord(source.data.location)) {
          return false;
        }

        return !isEqualCoord(source.data.location, location);
      },
      onDragEnter: ({ source }) => {
        console.log("onDragEnter:", source.data);
        if (
          !isCoord(source.data.location) ||
          !isPieceType(source.data.pieceType)
        ) {
          return;
        }

        if (
          canMove(source.data.location, location, source.data.pieceType, pieces)
        ) {
          setState("validMove");
        } else {
          setState("invalidMove");
        }
      },
      onDragLeave: () => {
        console.log("onDragLeave");
        setState("idle");
      },
      onDrop: ({source, location}) => {
        console.log("onDrop");
        setPieces([]);
        setState("idle");
      },
    });
  }, [location, pieces]);

  const isDark = (location[0] + location[1]) % 2 === 1;

  return (
    <div
      className="squareStyles"
      style={{ backgroundColor: getColor(state, isDark) }}
      ref={ref}
    >
      {children}
    </div>
  );
}

export default Square;
