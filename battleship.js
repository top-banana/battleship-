// pregame
// config button pane
var board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// console.log(board.length);
var ROW = board.length
var COLUMN = board[0].length

// note: everything is being measured from the top left hand corner of the square ---> that is the (0,0) origin position
$("body").prepend($("<button>", {id: "patrolboat", "class": "shipbutton"}), $("<button>", {id: "sub", "class": "shipbutton"}), $("<button>", {id: "destroyer", "class": "shipbutton"}), $("<button>", {id: "carrier", "class": "shipbutton"}), $("<button>", {id: "battleship", "class": "shipbutton"}), $("<button>", {id: "setship", "class": "shipbutton"}),  $("<button>", {id: "start", "class": "shipbutton"}));

for (var row = 0; row < ROW; row++) {
  for (var column = 0; column < COLUMN; column++) {
    var $div = $("<div>", {class: "cell", id:"R"+row+"C"+column})
    $div.insertBefore(".script")
  }
}
for (var row = 0; row < ROW; row++) {
  for (var column = 0; column < COLUMN; column++) {
    // each cell to be set within a div
    // each cell has a class called cell
    // use the class function to set the style of the cell
    // set border, position var id = id+=1
    // add click listener
    var $div = $("<div>", {class: "comcell", id: "R"+row+"C"+column})
    $div.insertBefore(".script")
  }
}

function colorACell(row,column,color) {
  $("#" +"R"+row+"C"+column).css("background-color", color)
}

// function to run after each ship has been set. allows u to determine the final row and column of the ships
// after ship has been set, mark out its border (in the grid) with values of 3. when trying to place another boat, if it runs through the row or column and it meets a 3 within the grid, the ship will automaticaly rotate... it placing the ship in that position is blocked
function shipHorizontal(row, column, length, shiptype) {
  for (var i = 0; i < length; i++) {
    if (shiptype === "patrolboat") {
      colBoatOccupies = column + i
      BoatFinalHorizontalCol.push(colBoatOccupies)
      // console.log("boat horizontal");
      // console.log(BoatFinalHorizontalCol);
    }
    if (shiptype === "submarine") {
      colSubOccupies = column + i
      SubFinalHorizontalCol.push(colSubOccupies)
      console.log(SubFinalHorizontalCol);
    }
    if (shiptype === "destroyer") {
      colDestroyerOccupies = column + i
      DestroyerFinalHorizontalCol.push(colDestroyerOccupies)
      console.log(DestroyerFinalHorizontalCol);
    }
    if (shiptype === "carrier") {
      colCarrierOccupies = column + i
      CarrierFinalHorizontalCol.push(colCarrierOccupies)
      console.log(CarrierFinalHorizontalCol);
    }
    if (shiptype === "battleship") {
      colBattleshipOccupies = column + i
      BattleshipFinalHorizontalCol.push(colBattleshipOccupies)
      console.log(BattleshipFinalHorizontalCol);
    }
  }
}


function shipVertical(row, column, length, shiptype) {
  for (var i = 0; i < length; i++) {
    if (shiptype === "patrolboat") {
      rowBoatOccupies = row + i
      BoatFinalVerticalRow.push(rowBoatOccupies)
      // console.log("boat vertical");
      // console.log(BoatFinalVerticalRow);
    }
    if (shiptype === "submarine") {
      rowSubOccupies = row + i
      SubFinalVerticalRow.push(rowSubOccupies)
      console.log("sub vertical");
      console.log(SubFinalVerticalRow);
    }
    if (shiptype === "destroyer") {
      rowDestroyerOccupies = row + i
      DestroyerFinalVerticalRow.push(rowDestroyerOccupies)
      console.log("destroyer vertical");
      console.log(DestroyerFinalVerticalRow);
    }
    if (shiptype === "carrier") {
      rowCarrierOccupies = row + i
      CarrierFinalVerticalRow.push(rowCarrierOccupies)
      console.log("carrier vertical");
      console.log(CarrierFinalVerticalRow);
    }
    if (shiptype === "battleship") {
      rowBattleshipOccupies = row + i
      BattleshipFinalVerticalRow.push(rowBattleshipOccupies)
      console.log("battleship vertical");
      console.log(BattleshipFinalVerticalRow);
    }
  }
}

var BoatDirection = "horizontal"

function makeBoat(row, column, length) {

  for(let i = 0; i < length; i++) {
    // why doesnt this commnd work?
    if (column  === 9) {
        colorACell((row+i), column, "red")
        BoatDirection = "vertical"
    }
    else {
      colorACell(row, (column+i), "red")
    }

    if (BoatDirection === "horizontal") {
      if (row === 9) {
        $("#" +"R"+row+"C"+column).click(function () {
        colorACell((row+i), column, "red")
        colorACell(row, column, "red")
        BoatDirection = "horizontal"
      })
    }
      else {
        $("#" +"R"+row+"C"+column).click(function () {
        colorACell((row+i), column, "red")
        colorACell(row, column, "red")
        colorACell(row, (column+i), "white")
        BoatDirection = "vertical"
        })
      }
    }
    else if (BoatDirection === "vertical") {
      if (column === 9) {
        $("#" +"R"+row+"C"+column).click(function () {
        colorACell((row+i), column, "red")
        colorACell(row, column, "red")
        BoatDirection = "vertical"
        })
      }
      else {
        $("#" +"R"+row+"C"+column).click(function () {
        colorACell(row, (column+i), "red")
        colorACell(row, column, "red")
        colorACell((row+i), column, "white")
        BoatDirection = "horizontal"
        })
      }
    }
  }
}

function makeBoatWhite(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (BoatDirection === "horizontal") {
      colorACell(row, (column+i), "white")
    }
    else if (BoatDirection === "vertical") {
      colorACell((row+i), column, "white")
    }
  }
}

var colBoatOccupies, rowBoatOccupies
var BoatFinalHorizontalCol = []
// final COLUMN values of the row ONLY
var BoatFinalHorizontalCol1 = []
// includes row and column values which have been derived from BoatFinalHorizontalCol
var BoatFinalHorizontalCol2 = []
var BoatFinalPositionHorizontal = []

var BoatFinalVerticalRow = []
var BoatFinalVerticalRow1 = []
var BoatFinalVerticalRow2 = []
var BoatFinalPositionVertical = []
var horizontalboatrowtoupdatetop, horizontalboatrowtoupdatebottom
var horizontalboatcoltoupdateleft, horizontalboatcoltoupdateright
var verticalboatrowtoupdatetop, verticalboatrowtoupdatebottom
var verticalboatcoltoupdateleft, verticalboatcoltoupdateright
// // zero refers to the cell that was clicked
// // setShipPosition functiosn determine theh final position of the ships
//   //

function setBoatPosition() {
  if (setBoat) {
    $("#patrolboat").off()
    $(".cell").off()
  }
    if (BoatDirection === "horizontal") {
      shipHorizontal(prevRowBoat, prevColBoat, 2, "patrolboat")
      BoatFinalHorizontalCol1.push(prevRowBoat, BoatFinalHorizontalCol[0])
      // console.log(BoatFinalHorizontalCol1);
      BoatFinalHorizontalCol2.push(prevRowBoat, BoatFinalHorizontalCol[1])
      // console.log(BoatFinalHorizontalCol2);
      BoatFinalPositionHorizontal.push(BoatFinalHorizontalCol1, BoatFinalHorizontalCol2)
      console.log(BoatFinalPositionHorizontal);

      // updates the perimeter of the boat with value 3. to prevent the grid from being changed
      // cannot use splice to change because it will alter the original array!!

        horizontalboatrowtoupdatetop = prevRowBoat - 1
        horizontalboatrowtoupdatebottom = prevRowBoat + 1
        horizontalboatcoltoupdateleft = BoatFinalHorizontalCol[0] - 1
        horizontalboatcoltoupdateright = BoatFinalHorizontalCol[1] + 1

        for (var row = 0; row < ROW; row++) {
          for (var column = 0; column < COLUMN; column++) {
            for (var i = 0; i < 2; i++) {
              if (row === BoatFinalPositionHorizontal[i][0] && column === BoatFinalPositionHorizontal[i][1]) {
                board[row][column] = 1
              }
            }

            if (row === horizontalboatrowtoupdatetop && column === BoatFinalHorizontalCol[0]) {
              board[row][column] = 3
            }
            if (row === horizontalboatrowtoupdatetop && column === BoatFinalHorizontalCol[1]) {
                board[row][column] = 3
            }
            if (row === horizontalboatrowtoupdatebottom && column === BoatFinalHorizontalCol[0]) {
                board[row][column] = 3
            }
            if (row === horizontalboatrowtoupdatebottom && column === BoatFinalHorizontalCol[1]) {
              board[row][column] = 3
            }
            if (row === prevRowBoat && column === horizontalboatcoltoupdateleft) {
              board[row][column] = 3
            }
            if (row === prevRowBoat && column === horizontalboatcoltoupdateright) {
              board[row][column] = 3
            }
        }
      }
      console.log(board);
  }
    else if (BoatDirection === "vertical") {
      shipVertical(prevRowBoat, prevColBoat, 2, "patrolboat")
      // console.log("set boat vertical");
      BoatFinalVerticalRow1.push(BoatFinalVerticalRow[0], prevColBoat)
      // console.log(BoatFinalVerticalRow1);
      BoatFinalVerticalRow2.push(BoatFinalVerticalRow[1], prevColBoat)
      // console.log(BoatFinalVerticalRow2);
      BoatFinalPositionVertical.push(BoatFinalVerticalRow1, BoatFinalVerticalRow2)
      // console.log(BoatFinalPositionVertical);
      // on the board, determine where the ships are marked
      // determine the perimeter of the ships
      verticalboatrowtoupdatetop = prevRowBoat - 1
      verticalboatrowtoupdatebottom = prevRowBoat + 2
      verticalboatcoltoupdateleft = prevColBoat - 1
      verticalboatcoltoupdateright = prevColBoat + 1

      for (var row = 0; row < ROW; row++) {
        for (var column = 0; column < COLUMN; column++) {
          for (var i = 0; i < 2; i++) {
            if (row === BoatFinalPositionVertical[i][0] && column === BoatFinalPositionVertical[i][1]) {
              board[row][column] = 1
            }
          }
            if (row === verticalboatrowtoupdatetop && column === prevColBoat) {
              board[row][column] = 3
            }
            if (row === verticalboatrowtoupdatebottom && column === prevColBoat) {
              board[row][column] = 3
            }
            if (row === prevRowBoat && column === verticalboatcoltoupdateleft) {
              board[row][column] = 3
            }
            if (row === prevRowBoat && column === verticalboatcoltoupdateright) {
              board[row][column] = 3
            }
            if (row === (prevRowBoat + 1) && column === verticalboatcoltoupdateleft) {
              board[row][column] = 3
            }
            if (row === (prevRowBoat+1) && column === verticalboatcoltoupdateright) {
              board[row][column] = 3
            }
        }
      }
    }
  console.log(board);
}


var freshMoveBoat = true
var BoatClicked = false
var setBoat = false
var prevRowBoat, prevColBoat

$("#patrolboat").append("Patrol boat").click(function () {
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {

      $("#" +"R"+row+"C"+column).click(function () {
        if (freshMoveBoat) {
          makeBoat(row, column, 2);
          prevRowBoat = row
          prevColBoat = column
          freshMoveBoat = false;

        } else {
          makeBoatWhite(prevRowBoat, prevColBoat, 2);
          prevRowBoat = row
          prevColBoat = column
          makeBoat(row, column, 2);
          freshMoveBoat = false
        }
      })
      if (board[row][column] === 1) {
        console.log(board);
          $("#" +"R"+row+"C"+column).off()
      }
      if (row === 9 && column === 9) {
        $("#" +"R"+row+"C"+column).off()
      }
    }
  }
  BoatClicked = true
})

var SubDirection = "horizontal"

function makeSub(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (column < 8) {
      colorACell(row, (column+i), "red")
    }
    else if (column === 8 || column === 9) {
      colorACell((row+i), column, "red")
      SubDirection = "vertical"
    }
    if (SubDirection === "horizontal") {
      if (row === 9 || row === 8) {
        $("#" +"R"+row+"C"+column).click(function () {
        colorACell(row, (column+i), "red")
        colorACell(row, column, "red")
        SubDirection = "horizontal"
      })
    }
      else  {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell((row+i), column, "red")
          colorACell(row, column, "red")
          colorACell(row, (column+i), "white")
          SubDirection = "vertical"
        })
      }
    }
    else if (SubDirection === "vertical") {
      if (column < 8) {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell(row, (column+i), "red")
          colorACell(row, column, "red")
          colorACell((row+i), column, "white")
          SubDirection = "horizontal"
        })
      }
    }
  }
}

function makeSubWhite(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (SubDirection === "horizontal") {
      colorACell(row, (column+i), "white")
    }
    else if (SubDirection === "vertical") {
      colorACell((row+i), column, "white")
    }
  }
}

var freshMoveSub = true
var SubClicked = false
var setSub = false
var prevRowSub, prevColSub;
var SubFinalPosition = []
// var colSubOccupies
// var rowSubOccupies
// if HORIZONTAL --> column increases
var SubFinalHorizontalCol = []
var SubFinalHorizontal = []
var SubFinalHorizontalCol1 = []
var SubFinalHorizontalCol2 = []
var SubFinalHorizontalCol3 = []
// if VERTICAL --> row increases
var SubFinalVerticalRow = []
var SubFinalVertical = []
var SubFinalVerticalCol1 = []
var SubFinalVerticalCol2 = []
var SubFinalVerticalCol3 = []

function setSubPosition () {
  if (setSub) {
    $("#sub").off()
    $(".cell").off()
  }

  if (SubDirection === "horizontal") {
    shipHorizontal(prevRowSub, prevColSub, 3, "submarine")
  }

  else if (SubDirection === "vertical") {
    shipVertical(prevRowSub, prevColSub, 3, "submarine")

  }


  // for (var row = 0; row < ROW; row++) {
  //   for (var column = 0; column < COLUMN; column++) {
  //     for (var i = 0; i < 3; i++) {
  //       if (row === SubFinalPosition[i][0] && column === SubFinalPosition[i][1]) {
  //         board[row][column] = 1
  //       }
  //     }
  //   }
  // }
  //       console.log(board);
}


$("#sub").append("Submarine").click(function () {
    SubClicked = true
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      if (board[row][column] === 1) {
          $("#" +"R"+row+"C"+column).off()
      }
      $("#" +"R"+row+"C"+column).click(function () {
        if (freshMoveSub) {
        makeSub(row, column, 3)
        prevRowSub = row
        prevColSub = column
        freshMoveSub = false
        }
        else {
          makeSubWhite(prevRowSub, prevColSub, 3)
          makeSub(row, column, 3)
          prevRowSub = row
          prevColSub = column
          freshMoveSub = false
        }
      })
      if (board[row][column] === 1) {
        $("#" +"R"+row+"C"+column).off()
      }
      if (row >= 8 && column >= 8) {
        $("#" +"R"+row+"C"+column).off()
      }
    }
  }
})

var DestroyerDirection = "horizontal"

function makeDestroyer(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (column < 8) {
      colorACell(row, (column+i), "red")
    }

    else if (column === 8 || column === 9) {
      colorACell((row+i), column, "red")
      DestroyerDirection = "vertical"
    }
    if (DestroyerDirection === "horizontal") {
      if (row === 9 || row === 8) {
        $("#" +"R"+row+"C"+column).click(function () {
        colorACell(row, (column+i), "red")
        colorACell(row, column, "red")
        DestroyerDirection = "horizontal"
      })
    }
      else {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell((row+i), column, "red")
          colorACell(row, column, "red")
          colorACell(row, (column+i), "white")
          DestroyerDirection = "vertical"
        })
      }
    }
    else if (DestroyerDirection === "vertical") {
      if (column < 8) {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell(row, (column+i), "red")
          colorACell(row, column, "red")
          colorACell((row+i), column, "white")
          DestroyerDirection = "horizontal"
        })
      }
    }
  }

}

function makeDestroyerWhite(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (DestroyerDirection === "horizontal") {
      colorACell(row, (column+i), "white")
    }
    else if (DestroyerDirection === "vertical") {
      colorACell((row+i), column, "white")
    }
  }
}

var colDestroyerOccupies, rowDestroyerOccupies;

var DestroyerFinalHorizontalCol = []
var DestroyerFinalHorizontalCol1 = []
var DestroyerFinalHorizontalCol2 = []
var DestroyerFinalHorizontalCol3 = []
var DestroyerFinalHorizontal = []

var DestroyerFinalVerticalRow = []
var DestroyerFinalVerticalRow1 = []
var DestroyerFinalVerticalRow2 = []
var DestroyerFinalVerticalRow3 = []
var DestroyerFinalVertical = []

var horizontaldestroyerrowtoupdatetop, horizontaldestroyerrowtoupdatebottom
var horizontaldestroyercoltoupdateleft, horizontaldestroyercoltoupdateright
var verticaldestroyerrowtoupdatetop, verticaldestroyerrowtoupdatebottom
var verticaldestroyercoltoupdateleft, verticaldestroyercoltoupdateright

function setDestroyerPosition() {
  if(setDestroyer) {
    $("#destroyer").off()
    $(".cell").off()
  }

  // to find out final position of ship
    if (DestroyerDirection === "horizontal") {
      shipHorizontal(prevRowDestroyer, prevColDestroyer, 3, "destroyer")
      DestroyerFinalHorizontalCol1.push(prevRowDestroyer, DestroyerFinalHorizontalCol[0])
      DestroyerFinalHorizontalCol2.push(prevRowDestroyer, DestroyerFinalHorizontalCol[1])
      DestroyerFinalHorizontalCol3.push(prevRowDestroyer, DestroyerFinalHorizontalCol[2])
      DestroyerFinalHorizontal.push(DestroyerFinalHorizontalCol1, DestroyerFinalHorizontalCol2, DestroyerFinalHorizontalCol3)

      horizontaldestroyerrowtoupdatetop = prevRowDestroyer - 1
      horizontaldestroyerrowtoupdatebottom = prevRowDestroyer + 1
      horizontaldestroyercoltoupdateleft = DestroyerFinalHorizontalCol[0] - 1
      horizontaldestroyercoltoupdateright = DestroyerFinalHorizontalCol[2] + 1

      for (var row = 0; row < ROW; row++) {
        for (var column = 0; column < COLUMN; column++) {
          for (var i = 0; i < 3; i++) {
            if (row === DestroyerFinalHorizontal[i][0] && column === DestroyerFinalHorizontal[i][1]) {
              board[row][column] = 1
            }
          }
          // if (row === horizontaldestroyerrowtoupdatetop && column === DestroyerFinalHorizontalCol[0]) {
          //   board[row][column] = 3
          // }
          // if (row === horizontaldestroyerrowtoupdatetop && column === DestroyerFinalHorizontalCol[1]) {
          //   board[row][column] = 3
          // }
          // if (row === horizontaldestroyerrowtoupdatetop && column === DestroyerFinalHorizontalCol[2]) {
          //   board[row][column] = 3
          // }
          // if (row === horizontaldestroyerrowtoupdatebottom && column === DestroyerFinalHorizontalCol[0]) {
          //   board[row][column] = 3
          // }
          // if (row === horizontaldestroyerrowtoupdatebottom && column === DestroyerFinalHorizontalCol[1]) {
          //   board[row][column] = 3
          // }
          // if (row === horizontaldestroyerrowtoupdatebottom && column === DestroyerFinalHorizontalCol[2]) {
          //   board[row][column] = 3
          // }
          // if (row === prevRowDestroyer && column ===horizontaldestroyercoltoupdateleft) {
          //   board[row][column] = 3
          // }
          // if (row === prevRowDestroyer && column ===horizontaldestroyercoltoupdateright) {
          //   board[row][column] = 3
          // }
        }
      }
      console.log(board);
    }
    else if (DestroyerDirection === "vertical") {

      shipVertical(prevRowDestroyer, prevColDestroyer, 3, "destroyer")
      DestroyerFinalVerticalRow1.push(DestroyerFinalVerticalRow[0], prevColDestroyer)
      DestroyerFinalVerticalRow2.push(DestroyerFinalVerticalRow[1], prevColDestroyer)
      DestroyerFinalVerticalRow3.push(DestroyerFinalVerticalRow[2], prevColDestroyer)
      DestroyerFinalVertical.push(DestroyerFinalVerticalRow1, DestroyerFinalVerticalRow2, DestroyerFinalVerticalRow3)

      // for (var row = 0; row < ROW; row++) {
      //   for (var column = 0; column < COLUMN; column++) {
      //     for (var i = 0; i < 3; i++)
      //     if (row === DestroyerFinalPosition[i][0] && column === DestroyerFinalPosition[i][1]) { board[row][column] = 1
      //     }
      //   }
      // }
    }
}

var setDestroyer = false
var DestroyerClicked = false
var freshMoveDestroyer = true
var prevRowDestroyer, prevColDestroyer;

$("#destroyer").append("Destroyer").click(function () {
  DestroyerClicked = true
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      $("#" +"R"+row+"C"+column).click(function () {
        if (freshMoveDestroyer) {
        makeDestroyer(row, column, 3)
        prevRowDestroyer = row
        prevColDestroyer = column
        freshMoveDestroyer = false
        }
        else {
          makeDestroyerWhite(prevRowDestroyer, prevColDestroyer, 3)
          makeDestroyer(row, column, 3)
          prevRowDestroyer = row
          prevColDestroyer = column
          freshMoveDestroyer = false
        }
     })
     if (board[row][column] === 1) {
         $("#" +"R"+row+"C"+column).off()
     }
     if (row >= 8 && column >= 8) {
       $("#" +"R"+row+"C"+column).off()
     }
   }
 }
})

var CarrierDirection = "horizontal"
function makeCarrier(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (column < 7) {
      colorACell(row, (column+i), "red")
    }
    else if (column >= 7) {
      colorACell((row+i), column, "red")
      CarrierDirection = "vertical"
    }
    if (CarrierDirection === "horizontal") {
      if (row >= 7) {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell(row, (column+i), "red")
          colorACell(row, column, "red")
          CarrierDirection = "horizontal"
        })
      }

      else if (row < 7) {
        $("#" +"R"+row+"C"+column).click(function () {
            colorACell((row+i), column, "red")
            colorACell(row, column, "red")
            colorACell(row, (column+i), "white")
            CarrierDirection = "vertical"
          })
      }
    }
    else if (CarrierDirection === "vertical") {
      if (column < 7) {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell(row, (column+i), "red")
          colorACell(row, column, "red")
          colorACell((row+i), column, "white")
          CarrierDirection = "horizontal"
        })
      }
    }
  }
}

function makeCarrierWhite(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (CarrierDirection === "horizontal") {
      colorACell(row, (column+i), "white")
    }
    else if (CarrierDirection === "vertical") {
      colorACell((row+i), column, "white")
    }
  }
}

var colCarrierOccupies, rowCarrierOccupies
var CarrierFinalHorizontalCol = []
var CarrierFinalVerticalRow = []
function setCarrierPosition () {
  if (setCarrier) {
    $("#carrier").off()
    $(".cell").off()
  }

  if (CarrierDirection === "horizontal") {
    shipHorizontal(prevRowCarrier, prevColCarrier, 4, "carrier")
 }
 else if (CarrierDirection === "vertical") {
   shipVertical(prevRowCarrier, prevColCarrier, 4, "carrier")
 }
 for (var row = 0; row < ROW; row++) {
   for (var column = 0; column < COLUMN; column++) {
     for (var i = 0; i < 4; i++)
     if (row === CarrierFinalPosition[i][0] && column === CarrierFinalPosition[i][1]) {
       board[row][column] = 1
     }
   }
 }
}

var CarrierClicked = false
var setCarrier = false
var freshMoveCarrier = true
var prevRowCarrier, prevColCarrier;

$("#carrier").append("Carrier").click(function () {
    CarrierClicked = true
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      if (board[row][column] === 1) {
          $("#" +"R"+row+"C"+column).off()
      }
      $("#" +"R"+row+"C"+column).click(function () {
        if (freshMoveCarrier) {
        makeCarrier(row, column, 4)
        prevRowCarrier= row
        prevColCarrier= column
        freshMoveCarrier = false
        }
        else {
          makeCarrierWhite(prevRowCarrier, prevColCarrier, 4)
          makeCarrier(row, column, 4)
          prevRowCarrier = row
          prevColCarrier = column
          freshMoveCarrier = false
        }
      })
      if (board[row][column] === 1) {
          $("#" +"R"+row+"C"+column).off()
      }
      if (row >= 7 && column >=7) {
        $("#" +"R"+row+"C"+column).off()
      }
    }
  }
})

var BattleshipDirection = "horizontal"

function makeBattleship(row, column, length) {
  for (let i = 0; i < length; i++) {
    if (column < 6) {
      colorACell(row, (column+i), "red")
      }
    else {
    colorACell((row+i), column, "red")
    BattleshipDirection = "vertical"
      }

    if (BattleshipDirection === "horizontal") {
      if (row >=6) {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell(row, (column+i), "red")
          // colorACell (row, column, "red")
          BattleshipDirection = "horizontal"
        })
      }
      else {
        $("#" +"R"+row+"C"+column).click(function () {
          colorACell((row+i), column, "red")
          colorACell (row, column, "red")
          colorACell(row, (column+i), "white")
          BattleshipDirection = "vertical"
        })
      }
    }
  else if (BattleshipDirection === "vertical") {
    $("#" +"R"+row+"C"+column).click(function () {
      if (column < 6) {
        colorACell(row, (column+i), "red")
        colorACell (row, column, "red")
        colorACell((row+i), column, "white")
        BattleshipDirection = "horizontal"
        }
      })
    }
  }
}


function makeBattleshipWhite (row, column, length) {
  for (var i = 0; i < length; i++) {
    if (BattleshipDirection === "horizontal") {
      colorACell(row, (column+i), "white")
    }
    else if (BattleshipDirection === "vertical")
      colorACell((row+i), column, "white")
  }
}

var colBattleshipOccupies, rowBattleshipOccupies
var BattleshipFinalHorizontalCol = []
var BattleshipFinalVerticalRow = []

function setBattleshipPosition() {
  if (setBattleship) {
    $("#battleship").off()
    $(".cell").off()
  }

    if (BattleshipDirection === "horizontal") {
      shipHorizontal(prevRowBattleship, prevColBattleship, 5, "battleship")
    }

    else if (BattleshipDirection === "vertical") {
      shipVertical(prevRowBattleship, prevColBattleship, 5, "battleship")
    }

    // for (var row = 0; row < ROW; row++) {
    //   for (var column = 0; column < COLUMN; column++) {
    //     for (var i = 0; i < 5; i++)
    //     if (row === BattleshipFinalPosition[i][0] && column === BattleshipFinalPosition[i][1]) {
    //       board[row][column] = 1
    //     }
    //   }
    // }
}

var freshMoveBattleship = true
var BattleshipClicked = false
var setBattleship = false
var prevColBattleship, prevRowBattleship;
var BattleshipFinalPosition = []

$("#battleship").append("Battleship").click(function () {
  BattleshipClicked = true
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      $("#" +"R"+row+"C"+column).click(function () {
        if (freshMoveBattleship) {
        makeBattleship (row, column, 5)
        prevRowBattleship = row
        prevColBattleship = column
        freshMoveBattleship  = false
        }
        else {
          makeBattleshipWhite (prevRowBattleship, prevColBattleship, 5)
          makeBattleship (row, column, 5)
          prevRowBattleship = row
          prevColBattleship = column
          freshMoveBattleship = false
        }
      })
      if (board[row][column] === 1) {
          $("#" +"R"+row+"C"+column).off()
      }
      if (row >= 6 && column >=6) {
        $("#" +"R"+row+"C"+column).off()
      }
    }
  }
})

$("#setship").append("Set Ship").click(function () {
   if (BoatClicked === true) {
     setBoat = true
     setBoatPosition()
   }
  if (SubClicked === true) {
    setSub = true
    setSubPosition()
   }
   if (DestroyerClicked === true) {
     setDestroyer = true
     setDestroyerPosition()
    }
   if (CarrierClicked === true) {
     setCarrier = true
     setCarrierPosition()
   }
   if (BattleshipClicked === true) {
     setBattleship = true
     setBattleshipPosition()
   }
})


var playernumberofpositionsfilled = 0
var playerclickedthisrow, playerclickedthiscol;
$("#start").append("Start").click(function () {
  console.log(board);
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      if (board[row][column] === 1) {
        playernumberofpositionsfilled += 1
      }
    }
  }
    if (playernumberofpositionsfilled === 17) {
      // alert("OFF TO WAR!!")
      $(".cell").off()
      playernumberofpositionsfilled = 0
      for (let comcellrow = 0; comcellrow < ROW; comcellrow++) {
        for (let comcellcolumn = 0; comcellcolumn < COLUMN; comcellcolumn++) {
            $("#" +"R"+comcellrow+"C"+comcellcolumn+".comcell").click(function () {
              playerclickedthisrow = comcellrow
              playerclickedthiscol = comcellcolumn
              PlayerMakeAMove(playerclickedthisrow, playerclickedthiscol)
              computerStrategy()
              computerMove()
            })
        }
      }
    }
    else if (playernumberofpositionsfilled < 17) {
      // alert("Some ships have not been placed")
  }
})


// var playerclickedthisrow, playerclickedthiscol;
//
// $("#start").append("Start").click(function () {
//   var debugmode = true
//   if (debugmode) {
//     playernumberofpositionsfilled = 17
  // for (let row = 0; row < ROW; row++) {
  //   for (let column = 0; column < COLUMN; column++) {
  //     if (board[row][column] === 1) {
  //       playernumberofpositionsfilled += 1
  //     }
  //   }
  // }
//     if (playernumberofpositionsfilled === 17) {
//       // alert("OFF TO WAR!!")
//       $(".cell").off()
//       playernumberofpositionsfilled = 0
//       for (let comcellrow = 0; comcellrow < ROW; comcellrow++) {
//         for (let comcellcolumn = 0; comcellcolumn < COLUMN; comcellcolumn++) {
//             $("#" +"R"+comcellrow+"C"+comcellcolumn+".comcell").click(function () {
//               playerclickedthisrow = comcellrow
//               playerclickedthiscol = comcellcolumn
//               PlayerMakeAMove(playerclickedthisrow, playerclickedthiscol)
//               // generateRandomRowCol()
//               computerStrategy()
//               computerMove()
//             })
//         }
//       }
//     }
//     else if (playernumberofpositionsfilled < 17) {
//       alert("Some ships have not been placed")
//     }
//   }
// })
