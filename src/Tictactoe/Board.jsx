import React from "react";
import { calculateWinner } from "../helper";
import Cell from "./Cell";

export default function Board(props) {
  //   const show = () => {
  //     const cells = [null, null, null, null, null, null, "X", "X", "X"];
  //     calculateWinner(cells);
  //   };
  //   console.log(props);
  return (
    <div className="game-board">
      {props.cells.map((item, index) => {
        return (
          <Cell
            key={index}
            value={item}
            onClick={() => props.onClick(index)}
            className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
          />
        );
      })}
    </div>
  );
}
