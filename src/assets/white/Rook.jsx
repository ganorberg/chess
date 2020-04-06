import React from "react";

export default function WhiteRook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
      <g
        fill="#fff"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="butt"
          d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5"
        ></path>
        <path d="M34 14l-3 3H14l-3-3"></path>
        <path
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M31 17v12.5H14V17"
        ></path>
        <path d="M31 29.5l1.5 2.5h-20l1.5-2.5"></path>
        <path fill="none" strokeLinejoin="miter" d="M11 14h23"></path>
      </g>
    </svg>
  );
}
