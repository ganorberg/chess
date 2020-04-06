import React from "react";
import BlackBishop from "../assets-pieces/black/Bishop";
import WhiteBishop from "../assets-pieces/white/Bishop";

export default function Bishop({ color }) {
  return color === "black" ? <BlackBishop /> : <WhiteBishop />;
}
