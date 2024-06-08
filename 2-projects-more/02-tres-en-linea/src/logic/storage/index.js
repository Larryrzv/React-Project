/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

export const saveGameToStorage = ({ board, turn }) => {
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", turn);
};

export const resetGameStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
