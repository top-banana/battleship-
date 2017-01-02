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
  // if (isGameOver === false) {
    if (computerBoardForPlayer1[playerclickedthisrow][playerclickedthiscol] === 0) {
      $("#" +"R"+(playerclickedthisrow)+"C"+(playerclickedthiscol)+".comcell").css("background-color", "black")
    }
    else if (computerBoardForPlayer1[playerclickedthisrow][playerclickedthiscol] === 1) {
      $("#" +"R"+(playerclickedthisrow)+"C"+ (playerclickedthiscol)+".comcell").css("background-color", "yellow")
      computerBoardForPlayer1[playerclickedthisrow][playerclickedthiscol] = 2
      playernumberofhits += 1
      console.log(playernumberofhits);
    }
  // }
  if (isGameOver()) {
    whoWins()
    $(".cell").off()
    $(".comcell").off()
    alert("game has ended")
  }
}

function computerMove() {
// runs computer strategy
  if(board[computerRowToClick][computerColToClick] === 0) {
  $("#" +"R"+(computerRowToClick)+"C"+(computerColToClick)+".cell").css("background-color", "black")
  computerRowToClick
  computerColToClick
  // check if this is being set back to null value
  }
  else if(board[computerRowToClick][computerColToClick] === 1) {
    $("#" +"R"+row+"C"+column).css("background-color", "yellow")
    board[computerRowToClick][computerColToClick] = 2
    computernumberofhits += 1
    console.log(computernumberofhits);
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

function whoWins() {
  if (playernumberofhits === 17) {
    console.log(playernumberofhits);
    alert("Humanity FTW")
    return true
  }
  else if (computernumberofhits === 17) {
    console.log(computernumberofhits);
    alert("Losing faith in humanity")
    return true
  }
  else if (playernumberofhits < 17 || computernumberofhits < 17) {
    return false
  }
}

function isGameOver() {
  if (whoWins) {
    return true
  }
  else {
    return false
  }
}

function restart() {
  playernumberofhits = 0
  computernumberofhits = 0
  board.fill(0)
  console.log(board);
  computerBoardForPlayer1 = [
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

}
