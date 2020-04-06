import React from "react";
import BlackPawn from "../assets-pieces/black/Pawn";
import WhitePawn from "../assets-pieces/white/Pawn";

export default function Pawn({ color, position, board }) {
  return color === "black" ? <BlackPawn /> : <WhitePawn />;
}
