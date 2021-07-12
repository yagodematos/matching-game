import "./style.css";
import CardGame from "../../components/CardGame";

function BoardGame(amountCards) {
  const cardGame = CardGame();
  const boardGame = cardGame.repeat(amountCards);

  return `
    <section class="board-game">
        ${boardGame}
    </section>
  `;
}

export default BoardGame;
