if (prevRowBoat === 0) {
  // only mark out the bottom row
  console.log("row zero");
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
}
if (prevRowBoat === 9) {
  horizontalboatrowtoupdatetop = prevRowBoat - 1
  horizontalboatcoltoupdateleft = BoatFinalHorizontalCol[0] - 1
  horizontalboatcoltoupdateright = BoatFinalHorizontalCol[1] + 1
  for (var row = 0; row < ROW; row++) {
    for (var column = 0; column < COLUMN; column++) {
      for (var i = 0; i < BoatFinalHorizontalCol.length; i++) {
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
        if (row === prevRowBoat && column === horizontalboatcoltoupdateleft) {
          board[row][column] = 3
        }
        if (row === prevRowBoat && column === horizontalboatcoltoupdateright) {
          board[row][column] = 3
        }
    }
  }
}
