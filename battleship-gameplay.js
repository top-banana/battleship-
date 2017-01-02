var computerDefinedBoardForPlayer1 = [
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

var player = "human"
// human always starts first
var playernumberofhits = 0
var computernumberofhits = 0
function PlayerMakeAMove(row, column) {
  // CHECK IF GAMEOVER
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      $("#" +"R"+row+"C"+column+".comcell").click(function () {
        console.log("player make a move after start");
        if (computerDefinedBoardForPlayer1[row][column] === 0) {
          $("#" +"R"+row+"C"+column+".comcell").css("background-color", "black")
          computerDefinedBoardForPlayer1[row][column] = 0
            $("#" +"R"+row+"C"+column+".comcell").off()
        }
        else if (computerDefinedBoardForPlayer1[row][column] === 1) {
          $("#" +"R"+row+"C"+column+".comcell").css("background-color", "yellow")
          computerDefinedBoardForPlayer1[row][column] = 2
          playernumberofhits += 1
          $("#" +"R"+row+"C"+column+".comcell").off()
        }
        if (player === "human") {
          player = "computer"
          computerMove()
        }
      })
    }
    // console.log(playernumberofhits);
    // console.log(computerDefinedBoardForPlayer1);
  }
}

function computerMove() {
// runs computer strategy
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      if (board[row][column] === computerRowColToClick) {
        $("#" +"R"+row+"C"+column).click(function () {
          if(board[row][column] === 0) {
           $(".cell #" +"R"+row+"C"+column).css("background-color", "black")
           board[row][column] = 0
           computerRowColToClick = []
          }
          else if(board[row][column] === 1) {
            $(".cell #" +"R"+row+"C"+column).css("background-color", "yellow")
            board[row][column] = 2
            computernumberofhits += 1
            computerRowColToClick = []
          }
        })
      }
    }
    if (player === "computer") {
      player = "human"
      PlayerMakeAMove()
    }
  }

}

var computerRowToClick, computerColToClick;
var computerRowColToClick = []
function computerStrategy() {
  // generate random number and click that number
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      computerRowToClick = Math.floor(Math.random() * (ROW+1))
      computerColToClick = Math.floor(Math.random() * (COLUMN+1))
    }
  }
  computerRowColToClick.push(computerRowToClick, computerColToClick)
  console.log(computerRowColToClick);
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
