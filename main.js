import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import PlayerScore from "./src/components/PlayerScore";
import BoardGame from "./src/objects/BoardGame";

const AMOUNT_CARDS = 6;

const root = document.querySelector("#root");
const playerScore1 = PlayerScore("Player 1");
const PlayerScore2 = PlayerScore("Player 2");

// root.insertAdjacentHTML("beforeend", playerScore1);
// root.insertAdjacentHTML("beforeend", PlayerScore2);

const boardGame = BoardGame(AMOUNT_CARDS);
root.insertAdjacentHTML("beforeend", boardGame);
