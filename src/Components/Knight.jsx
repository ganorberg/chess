import React from "react";
import BlackKnight from "../assets/black/Knight";
import WhiteKnight from "../assets/white/Knight";

export default function Knight({ color }) {
  return color === "black" ? <BlackKnight /> : <WhiteKnight />;
}
