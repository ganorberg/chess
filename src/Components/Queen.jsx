import React from "react";
import BlackQueen from "../assets-pieces/black/Queen";
import WhiteQueen from "../assets-pieces/white/Queen";

export default function Queen({ color }) {
  return color === "black" ? <BlackQueen /> : <WhiteQueen />;
}
