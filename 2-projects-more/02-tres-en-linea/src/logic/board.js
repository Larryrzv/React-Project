import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
    // revisamos todas las posiciones y dictamos ganador o empate
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    // si no hay ganador
    return null;
  };