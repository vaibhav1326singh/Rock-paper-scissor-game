let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

const gencompchoice = () => {
  const compchoices = ["rock", "paper", "scissor"];
  const randomnum = Math.floor(Math.random() * 3);
  return compchoices[randomnum];
};

const playgame = (userchoice) => {
  console.log(`userchoice is = ${userchoice}`);
  let compchoice = gencompchoice();
  console.log(`compchoice is = ${compchoice}`);
  if (userchoice === compchoice) {
    msg.innerText = "It is a draw";
    console.log("it's  a tie!");
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice == "paper" ? false : true;
    } else if (userchoice === "scissor") {
      userwin = compchoice == "rock" ? false : true;
    } else {
      userwin = compchoice === "scissor" ? false : true;
    }
    if (userwin) {
      console.log("your win");
      msg.innerText = "You wins";
      userscore = userscore + 5;
      user_score.innerText = `${userscore}`;
    } else {
      console.log("computer wins");
      msg.innerText = "Computer Wins";
      compscore = compscore + 5;
      comp_score.innerText = `${compscore}`;
    }
  }
};
choices.forEach((choice) =>
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log(`button is clicked ${userchoice}`)
    playgame(userchoice);
  })
);
