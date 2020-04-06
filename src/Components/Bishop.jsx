import React from "react";
import BlackBishop from "../assets/black/Bishop";
import WhiteBishop from "../assets/white/Bishop";

export default function Bishop({ color }) {
  return color === "black" ? <BlackBishop /> : <WhiteBishop />;
}
