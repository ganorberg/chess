import React from "react";
import BlackKing from "../assets-pieces/black/King";
import WhiteKing from "../assets-pieces/white/King";

export default function King({ color }) {
  return color === "black" ? <BlackKing /> : <WhiteKing />;
}
