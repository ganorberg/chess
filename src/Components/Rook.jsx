import React from "react";
import BlackRook from "../assets/black/Rook";
import WhiteRook from "../assets/white/Rook";

export default function Rook({ color }) {
  return color === "black" ? <BlackRook /> : <WhiteRook />;
}
