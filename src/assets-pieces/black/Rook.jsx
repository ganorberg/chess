import React from "react";

export default function BlackRook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
      <g
        fill="0"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="butt"
          d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z"
        ></path>
        <path
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M14 29.5v-13h17v13H14z"
        ></path>
        <path
          strokeLinecap="butt"
          d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeLinejoin="miter"
          strokeWidth="1"
          d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23"
        ></path>
      </g>
    </svg>
  );
}
