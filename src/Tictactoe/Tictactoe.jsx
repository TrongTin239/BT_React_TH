import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";
import "./GameStyle.css";
export default function Tictactoe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, SetXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) {
      return;
    }
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    SetXIsNext((xIsNext) => !xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick} />

      <div className="game-winner">{winner ? `Winner is ${winner}` : ""}</div>
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
}
