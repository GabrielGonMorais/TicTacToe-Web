var EndMatch = false;
var CurrentPlayer = "X";
var RepeatedPosition = false;
var headerButtonX = document.getElementById("X");
var headerButtonO = document.getElementById("O");
headerButtonX.classList.add("shiningX");
var bottomBtn = document.getElementById("restart");
var VictoriesX = 0;
var scoreX = document.getElementById("scoreX");
var VictoriesO = 0;
var scoreO = document.getElementById("scoreO");
var btn = [
  document.getElementById("btn1"),
  document.getElementById("btn2"),
  document.getElementById("btn3"),
  document.getElementById("btn4"),
  document.getElementById("btn5"),
  document.getElementById("btn6"),
  document.getElementById("btn7"),
  document.getElementById("btn8"),
  document.getElementById("btn9"),
];
function Events(a) {
  VerifyRepeated(a);
  if (!RepeatedPosition && !EndMatch) {
    btn[a].innerText = CurrentPlayer;
    ChangeColor(a);
    VerifyWinner();
    if (!EndMatch) {
      ChangeLightTop();
      ChangeCurrentPlayer();
    }
  }
}
// useful //
function ChangeCurrentPlayer() {
  if (CurrentPlayer == "X") {
    CurrentPlayer = "O";
  } else if (CurrentPlayer == "O") {
    CurrentPlayer = "X";
  }
}
function VerifyRepeated(a) {
  if (btn[a].innerText == "X" || btn[a].innerText == "O") {
    RepeatedPosition = true;
  } else {
    RepeatedPosition = false;
  }
}
function VerifyWinner() {
  if (
    (btn[0].innerText == btn[1].innerText &&
      btn[1].innerText == btn[2].innerText &&
      btn[1].innerText == CurrentPlayer) ||
    (btn[3].innerText == btn[4].innerText &&
      btn[4].innerText == btn[5].innerText &&
      btn[4].innerText == CurrentPlayer) ||
    (btn[6].innerText == btn[7].innerText &&
      btn[7].innerText == btn[8].innerText &&
      btn[7].innerText == CurrentPlayer) ||
    (btn[0].innerText == btn[3].innerText &&
      btn[3].innerText == btn[6].innerText &&
      btn[3].innerText == CurrentPlayer) ||
    (btn[1].innerText == btn[4].innerText &&
      btn[4].innerText == btn[7].innerText &&
      btn[4].innerText == CurrentPlayer) ||
    (btn[2].innerText == btn[5].innerText &&
      btn[5].innerText == btn[8].innerText &&
      btn[5].innerText == CurrentPlayer) ||
    (btn[0].innerText == btn[4].innerText &&
      btn[4].innerText == btn[8].innerText &&
      btn[4].innerText == CurrentPlayer) ||
    (btn[2].innerText == btn[4].innerText &&
      btn[4].innerText == btn[6].innerText &&
      btn[4].innerText == CurrentPlayer)
  ) {
    if (CurrentPlayer == "X") {
      VictoriesX++;
      XwinLight();
      EndMatch = true;
    } else if (CurrentPlayer == "O") {
      VictoriesO++;
      OwinLight();
      EndMatch = true;
    }
  } else {
    EndMatch = false;
  }
  VerifyDraw();
}
function VerifyDraw() {
  var emptyPositions = 0;
  for (var verify = 0; verify < 9; verify++) {
    if (btn[verify].innerText != "X" && btn[verify].innerText != "O") {
      emptyPositions++;
    }
  }
  if (emptyPositions == 0 && EndMatch == false) {
    EndMatch = true;
    TurnOffLightsTop();
    DrawLight();
  }
}
function ResetGame() {
  EndMatch = false;
  ChangeLightTop();
  ChangeCurrentPlayer();
  ResetButtons();
  ResetColors();
  RefreshScore();
}
function ResetButtons() {
  btn[0].innerText =
    btn[1].innerText =
    btn[2].innerText =
    btn[3].innerText =
    btn[4].innerText =
    btn[5].innerText =
    btn[6].innerText =
    btn[7].innerText =
    btn[8].innerText =
      "";
}
function RefreshScore() {
  scoreX.innerText = VictoriesX.toString();
  scoreO.innerText = VictoriesO.toString();
}
// design/css functions //
function ChangeColor(a) {
  if (CurrentPlayer == "X") {
    btn[a].classList.add("playerX");
  } else if (CurrentPlayer == "O") {
    btn[a].classList.add("playerO");
  }
}
function ChangeLightTop() {
  if (CurrentPlayer == "X") {
    headerButtonO.classList.add("shiningO");
    headerButtonX.classList.remove("shiningX");
  } else if (CurrentPlayer == "O") {
    headerButtonX.classList.add("shiningX");
    headerButtonO.classList.remove("shiningO");
  }
}
function TurnOffLightsTop() {
  headerButtonX.classList.remove("shiningX");
  headerButtonO.classList.remove("shiningO");
}
function XwinLight() {
  bottomBtn.classList.add("shiningX", "cursorPoint");
}
function OwinLight() {
  bottomBtn.classList.add("shiningO", "cursorPoint");
}
function DrawLight() {
  bottomBtn.classList.add("restartDraw", "cursorPoint");
}
function ResetColors() {
  bottomBtn.classList.remove(
    "shiningX",
    "shiningO",
    "restartDraw",
    "cursorPoint"
  );
  for (var a = 0; a < 9; a++) {
    btn[a].classList.remove("playerX", "playerO");
  }
}
