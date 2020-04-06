import React from "react";
import BlackRook from "../assets-pieces/black/Rook";
import WhiteRook from "../assets-pieces/white/Rook";

export default function Rook({ color }) {
  return color === "black" ? <BlackRook /> : <WhiteRook />;
}
