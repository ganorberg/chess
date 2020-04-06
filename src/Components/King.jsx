import React from "react";
import BlackKing from "../assets/black/King";
import WhiteKing from "../assets/white/King";

export default function King({ color }) {
  return color === "black" ? <BlackKing /> : <WhiteKing />;
}
