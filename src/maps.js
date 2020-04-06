import King from "./Components/King";
import Queen from "./Components/Queen";
import Rook from "./Components/Rook";
import Bishop from "./Components/Bishop";
import Knight from "./Components/Knight";
import Pawn from "./Components/Pawn";
import { PIECE } from "./enums";

const buildPieceMap = () => {
  const pieces = new Map();
  pieces.set(PIECE.KING, King);
  pieces.set(PIECE.QUEEN, Queen);
  pieces.set(PIECE.ROOK, Rook);
  pieces.set(PIECE.BISHOP, Bishop);
  pieces.set(PIECE.KNIGHT, Knight);
  pieces.set(PIECE.PAWN, Pawn);
  return pieces;
};

export const pieces = buildPieceMap();
