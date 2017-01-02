var computerBoardForPlayer1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// var player = "human"
// human always starts first
var playernumberofhits = 0
var computernumberofhits = 0
function PlayerMakeAMove(playerclickedthisrow, playerclickedthiscol) {
  // CHECK IF GAMEOVER
  if (computerBoardForPlayer1[playerclickedthisrow][playerclickedthiscol] === 0) {
    $("#" +"R"+(playerclickedthisrow)+"C"+(playerclickedthiscol)+".comcell").css("background-color", "black")
  }
  else if (computerBoardForPlayer1[playerclickedthisrow][playerclickedthiscol] === 1) {
    $("#" +"R"+(playerclickedthisrow)+"C"+ (playerclickedthiscol)+".comcell").css("background-color", "yellow")
    computerBoardForPlayer1[playerclickedthisrow][playerclickedthiscol] = 2
    playernumberofhits += 1
  }
  // computerStrategy()
  // computerMove()
}

function computerMove() {
// runs computer strategy
  if(board[computerRowToClick][computerColToClick] === 0) {
  $("#" +"R"+(computerRowToClick)+"C"+(computerColToClick)+".cell").css("background-color", "black")
  computerRowToClick
  computerColToClick
  }
  else if(board[computerRowToClick][computerColToClick] === 1) {
    $("#" +"R"+row+"C"+column).css("background-color", "yellow")
    board[computerRowToClick][computerColToClick] = 2
    computernumberofhits += 1
    computerRowToClick
    computerColToClick
    }
  }



var computerRowToClick, computerColToClick;

function computerStrategy() {
  // generate random number and click that number
      computerRowToClick = Math.floor(Math.random() * (ROW))
      computerColToClick = Math.floor(Math.random() * (COLUMN))
}

// function whoWins() {
// }
//
// function gameOver() {
//
// }
// function restart() {
//
// }
