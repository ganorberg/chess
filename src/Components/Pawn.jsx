import React from "react";
import BlackPawn from "../assets/black/Pawn";
import WhitePawn from "../assets/white/Pawn";

export default function Pawn({ color }) {
  return color === "black" ? <BlackPawn /> : <WhitePawn />;
}
