import React from "react";

export default function Cell(props) {
  const { value, onClick,className } = props;
//   console.log(value, onClick);
  return (
    <div className={`game-cells ${className} `} onClick={props.onClick}>
      {props.value}
    </div>
  );
}
