import React from "react";
import BlackKnight from "../assets-pieces/black/Knight";
import WhiteKnight from "../assets-pieces/white/Knight";

export default function Knight({ color }) {
  return color === "black" ? <BlackKnight /> : <WhiteKnight />;
}
