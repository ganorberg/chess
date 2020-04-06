import { PLAYER } from "./enums";

/*
TODO move logic:
- pawns 
  - cannot move forward to take another piece. Must move diagonally by one.
  - if haven't moved yet, can move forward 2 spaces. Otherwise, 1.
- king 
  - can move one space all around, but cannot move into check position
  - if in check, MUST move king
- queen: diagonals + straight
- bishop: diagonals
- knight: L shape
*/

function isEmpty(space) {
  return space === null;
}

// Can DRY move logic by separating from position changes
function checkVerticalDirections(
  board,
  [row, column],
  team,
  checkCondition,
  increment
) {
  const allowedMoves = [];
  const otherTeam = team === PLAYER.WHITE ? PLAYER.BLACK : PLAYER.WHITE;
  for (
    let rowIndex = row;
    checkCondition(rowIndex);
    increment ? rowIndex++ : rowIndex--
  ) {
    const space = board[rowIndex][column];

    if (isEmpty(space)) {
      allowedMoves.push([rowIndex, column]);
      continue;
    }

    if (space.team === team) {
      return allowedMoves;
    }

    if (space.team === otherTeam) {
      allowedMoves.push([rowIndex, column]);
      return allowedMoves;
    }
  }

  return allowedMoves;
}

function checkVertical(board, [row, column], team) {
  const allowedDownMoves = checkVerticalDirections(
    board,
    [row + 1, column],
    team,
    (index) => index < 8,
    true
  );
  const allowedUpMoves = checkVerticalDirections(
    board,
    [row - 1, column],
    team,
    (index) => index >= 0,
    false
  );
  return [...allowedDownMoves, ...allowedUpMoves];
}

function checkHorizontalDirections(
  board,
  [row, column],
  team,
  checkCondition,
  increment
) {
  const allowedMoves = [];
  const otherTeam = team === PLAYER.WHITE ? PLAYER.BLACK : PLAYER.WHITE;
  for (
    let columnIndex = column;
    checkCondition(columnIndex);
    increment ? columnIndex++ : columnIndex--
  ) {
    const space = board[row][columnIndex];

    if (isEmpty(space)) {
      allowedMoves.push([row, columnIndex]);
      continue;
    }

    if (space.team === team) {
      return allowedMoves;
    }

    if (space.team === otherTeam) {
      allowedMoves.push([row, columnIndex]);
      return allowedMoves;
    }
  }

  return allowedMoves;
}

function checkHorizontal(board, [row, column], team) {
  const allowedRightMoves = checkHorizontalDirections(
    board,
    [row, column + 1],
    team,
    (index) => index < 8,
    true
  );
  const allowedLeftMoves = checkHorizontalDirections(
    board,
    [row, column - 1],
    team,
    (index) => index >= 0,
    false
  );
  return [...allowedRightMoves, ...allowedLeftMoves];
}

export const moveRook = (board, position, team) => {
  const allowedHorizontalMoves = checkHorizontal(board, position, team);
  const allowedVerticalMoves = checkVertical(board, position, team);
  return [...allowedHorizontalMoves, ...allowedVerticalMoves];
};
