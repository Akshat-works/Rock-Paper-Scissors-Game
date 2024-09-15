let scorestr = localStorage.getItem("Score");
let currentScore = JSON.parse(scorestr) || { win: 0, lost: 0, tie: 0 };

function displayscore() {
  document.querySelector("#wins").innerText = `Won : ${currentScore.win}`;
  document.querySelector("#lost").innerText = `Lost : ${currentScore.lost}`;
  document.querySelector("#tie").innerText = `Tie : ${currentScore.tie}`;
}
let comp = "";
let res = "";
const arr = ["rock", "paper", "scissors"];

function compare(chosen) {
  comp = arr[Math.floor(Math.random() * 3)];
  if (chosen == comp) {
    res = "It's a tie";
    currentScore.tie++;
  } else if (
    (chosen == "rock" && comp == "paper") ||
    (chosen == "paper" && comp == "scissors") ||
    (chosen == "scissors" && comp == "rock")
  ) {
    res = "Computer wins";
    currentScore.lost++;
  } else {
    res = "You win";
    currentScore.win++;
  }
  document.querySelector(
    "#result"
  ).innerText = `You chose ${chosen}. Computer chose ${comp}. ${res}.`;
  localStorage.setItem("Score", JSON.stringify(currentScore));
  displayscore();
}
document.querySelector("#result").innerText = `Choose something!`;
displayscore();

function Clear(){
  localStorage.clear();
  currentScore = {win:  0,lost :0, tie: 0};
  displayscore();
  document.querySelector('#result').innerText='The Scores have been erased. Press any choice to start a new game.';
}