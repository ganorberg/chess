import { PIECE, PLAYER } from "./enums";
import { moveRook } from "./move";

function buildPiece(name, color) {
  return {
    name,
    // Replace with piece-specific move logic
    moveHandler: moveRook,
    team: color,
  };
}

function buildTeam(color) {
  const pawns = new Array(8).fill(0).map(() => buildPiece(PIECE.PAWN, color));
  const king = buildPiece(PIECE.KING, color);
  const queen = buildPiece(PIECE.QUEEN, color);
  const bishop = buildPiece(PIECE.BISHOP, color);
  const knight = buildPiece(PIECE.KNIGHT, color);
  const rook = buildPiece(PIECE.ROOK, color);
  return [[rook, knight, bishop, queen, king, bishop, knight, rook], pawns];
}

export default function buildBoard() {
  const whitePieces = buildTeam(PLAYER.WHITE);
  const blackPieces = buildTeam(PLAYER.BLACK);
  const emptyRow = new Array(8).fill(null);
  const emptySpaces = new Array(4).fill(null).map(() => emptyRow.slice());
  return [...blackPieces, ...emptySpaces, ...whitePieces.reverse()];
}
