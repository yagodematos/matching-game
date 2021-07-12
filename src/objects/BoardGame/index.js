import CardGame from "../../components/CardGame";

function BoardGame(amountCards) {
  const boardGame = Array.from(Array(amountCards), () => CardGame());

  boardGame.forEach((element) => {
    root.insertAdjacentHTML("beforeend", element);
  });

  return boardGame;
}

export default BoardGame;
