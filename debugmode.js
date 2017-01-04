var debugboard  = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
];

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
    if (computerBoardForPlayer1[playerclickedthisrow][playerclickedthiscol] === 0) {
      $("#" +"R"+(playerclickedthisrow)+"C"+(playerclickedthiscol)+".comcell").css("background-color", "black")
    }
    else if (computerBoardForPlayer1[playerclickedthisrow][playerclickedthiscol] === 1) {
      $("#" +"R"+(playerclickedthisrow)+"C"+ (playerclickedthiscol)+".comcell").css("background-color", "yellow")
      computerBoardForPlayer1[playerclickedthisrow][playerclickedthiscol] = 2
      playernumberofhits += 1
      // console.log(playernumberofhits);
    }
  if (isGameOver()) {
    whoWins()
    $(".cell").off()
    $(".comcell").off()
    alert("game has ended")
  }
}

function computerMove() {
  // console.log("after computer strategy outside check"+computerRowToClick);
  // console.log("after computer strategy outside check"+computerColToClick);
  if(debugboard[computerRowToClick][computerColToClick] === 0) {
    // console.log("after computer strategy inside check0"+computerRowToClick);
    // console.log("after computer strategy inside check0"+computerColToClick);
  $("#" +"R"+(computerRowToClick)+"C"+(computerColToClick)+".cell").css("background-color", "black")
  computerRowToClick
  computerColToClick
  }
  else if(debugboard[computerRowToClick][computerColToClick] === 1) {
    // console.log("after computer strategy inside check1"+computerRowToClick);
    // console.log("after computer strategy inside check1"+computerColToClick);
      $("#" +"R"+(computerRowToClick)+"C"+(computerColToClick)+".cell").css("background-color", "yellow")
    debugboard[computerRowToClick][computerColToClick] = 2
    computernumberofhits += 1
    computerRowToClick
    computerColToClick
   }
  }

  // function computerStrategy() {
  //   // generate random number and click that number
  //       computerRowToClick = Math.floor(Math.random() * (ROW))
  //       computerColToClick = Math.floor(Math.random() * (COLUMN))
  // }

var computerRowToClick, computerColToClick
var PreviousRandomRowCol = []
var RandomRow, RandomCol
var RandomRowCol = []
var generatefirstrandomnumber = true

function generateRandomRowCol() {
  RandomRow = Math.floor(Math.random() * ROW);
  RandomCol = Math.floor(Math.random() * COLUMN);
  // RandomRowCol.push(RandomRow, RandomCol)
  RandomRowCol = [RandomRow, RandomCol];
  console.log(RandomRowCol);
}


function computerStrategy () {
  if (generatefirstrandomnumber) {
    generateRandomRowCol()
    computerRowToClick = RandomRow
    computerColToClick = RandomCol
    PreviousRandomRowCol.push(RandomRowCol)
    generatefirstrandomnumber = false
    // console.log("first random rol and col");
    // console.log(RandomRowCol);
  }
  else {
    // from the second random number generated, reset random row and col generated before it
    generateRandomRowCol()
    console.log("subsequent row"+RandomRow);
    console.log("subsequent col"+RandomCol);

    for (var i = 0; i < PreviousRandomRowCol.length; i++) {
      console.log(PreviousRandomRowCol.length);
      console.log(PreviousRandomRowCol);
      while (RandomRow === PreviousRandomRowCol[i][0] && RandomCol === PreviousRandomRowCol[i][1]) {
        console.log("random number repeated");
        generateRandomRowCol()
      }
      computerRowToClick = RandomRow
      computerColToClick = RandomCol
      console.log("random number NOt repeated");
    }
    PreviousRandomRowCol.push(RandomRowCol)
    console.log(PreviousRandomRowCol);
    console.log(PreviousRandomRowCol.length);
  }
}
// PreviousRandomRowCol is an array that is dynamically changing...
// when PreviousRandomRowCol.push(RandomRowCol) was updated within the loop, PreviousRandomRowCol length kept on increasing by 1 and the loop ran again till infinity
// the while loop doesnt ALWAYS require a break... cuz everytime generateRandomRowCol() was run it was always checked against the condition such that if the condition was not fulfilled then it would automatically break out of the loop

function whoWins() {
  if (playernumberofhits === 17) {
    alert("Humanity FTW")
    return true
  }
  else if (computernumberofhits === 17) {
    // console.log(computernumberofhits);
    alert("Losing faith in humanity")
    return false
  }
}

function isGameOver() {
  if (playernumberofhits === 17 || computernumberofhits === 17) {
    return true
  }
  else if (playernumberofhits < 17 || computernumberofhits < 17){
    return false
  }
}

function restart() {
  playernumberofpositionsfilled = 0
  playernumberofhits = 0
  computernumberofhits = 0
  generatefirstrandomnumber = true
  board.fill(0)
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
