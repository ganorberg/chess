import React, { useReducer } from "react";

import Board from "./Components/Board";

import buildBoard from "./build-board";
import { PLAYER } from "./enums";
import cloneDeep from "lodash.clonedeep";

import "./Game.css";

const getInitialState = () => {
  return {
    turn: PLAYER.WHITE,
    checkmate: false,
    selectedPosition: [],
    board: buildBoard(),
    validMoves: [],
  };
};

function gameReducer(state, action) {
  switch (action.type) {
    case "DESELECT_PIECE":
      return {
        ...state,
        selectedPosition: [],
      };
    case "SELECT_PIECE":
      return {
        ...state,
        selectedPosition: action.payload.position,
        validMoves: action.payload.validMoves,
      };
    case "MOVE_PIECE":
      const [row, column] = action.payload;
      const [oldRow, oldColumn] = state.selectedPosition;

      const newBoard = cloneDeep(state.board);
      newBoard[row][column] = state.board[oldRow][oldColumn];
      newBoard[oldRow][oldColumn] = null;

      return {
        ...state,
        board: newBoard,
        turn: state.turn === PLAYER.WHITE ? PLAYER.BLACK : PLAYER.WHITE,
      };
    default:
      throw new Error();
  }
}

export default function Game() {
  const [state, dispatch] = useReducer(gameReducer, getInitialState());
  return (
    <div className="game">
      <p className="turn">{`Turn: ${state.turn.toUpperCase()}`}</p>
      <Board state={state} dispatch={dispatch} />
    </div>
  );
}
