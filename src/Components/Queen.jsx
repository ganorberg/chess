import React from "react";
import BlackQueen from "../assets/black/Queen";
import WhiteQueen from "../assets/white/Queen";

export default function Queen({ color }) {
  return color === "black" ? <BlackQueen /> : <WhiteQueen />;
}
