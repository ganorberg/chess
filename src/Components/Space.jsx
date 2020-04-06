import React from "react";
import { pieces } from "../maps";

function checkValidMove(validMoves, move) {
  return (
    validMoves.filter(
      (validMove) => validMove[0] === move[0] && validMove[1] === move[1]
    ).length > 0
  );
}

function clickHandler(state, dispatch, position, space) {
  return (e) => {
    const isSelectingOwnPiece = space?.team === state.turn;
    if (isSelectingOwnPiece) {
      const validMoves = space.moveHandler(state.board, position, space?.team);
      dispatch({
        type: "SELECT_PIECE",
        payload: { position, validMoves },
      });

      return;
    }

    if (state.selectedPosition.length === 0) {
      return;
    }

    const isValidMove = checkValidMove(state.validMoves, position);
    if (isValidMove) {
      dispatch({ type: "MOVE_PIECE", payload: position });
    }

    dispatch({ type: "DESELECT_PIECE" });
  };
}

export default function Space({ state, dispatch, space, row, column }) {
  const Piece = pieces.get(space?.name);
  return (
    <button
      className="space"
      onClick={clickHandler(state, dispatch, [row, column], space)}
    >
      {Piece ? <Piece color={space.team} /> : null}
    </button>
  );
}
