import React from "react";

import Space from "./Space";

export default function Board({ state, dispatch }) {
  return (
    <div className="board">
      {state.board.map((row, rowIndex) => {
        return row.map((space, columnIndex) => {
          const componentKey = `${rowIndex}|${columnIndex}`;
          return (
            <Space
              key={componentKey}
              state={state}
              dispatch={dispatch}
              space={space}
              row={rowIndex}
              column={columnIndex}
            />
          );
        });
      })}
    </div>
  );
}
