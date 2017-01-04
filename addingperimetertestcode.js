function placeBoatPerimeter(length, direction) {
  if (BoatDirection === "horizontal") {
    BoatFinalPositionHorizontal.forEach(function (value, index, array) {
      if (index === 0) {
        // the min is the first array
        // what needs to +/- 1 is the COLUMN
        min = BoatFinalPositionHorizontal[0][1]
      }
      if (index === (BoatFinalPositionHorizontal.length -1)) {
        // the max is the final array in this array
        max = BoatFinalPositionHorizontal[BoatFinalPositionHorizontal.length-1][1]
      }
    })
    BoatFinalPositionHorizontal.forEach(function (value, index, array) {
      if (BoatFinalPositionHorizontal[0][0]-1 < 0) {
        startrow = BoatFinalPositionHorizontal[0][0]
        for (var i = 0; i < length; i++) {
          board[startrow][BoatFinalPositionHorizontal[i][1]] = 3
          board[BoatFinalPositionHorizontal[0][0] + 1][BoatFinalPositionHorizontal[i][1]] = 3
          }
      }
      else if (BoatFinalPositionHorizontal[0][0]-1 >= 0) {
        startrow = BoatFinalPositionHorizontal[0][0] - 1
          for (var i = 0; i < length; i++) {
            board[startrow][BoatFinalPositionHorizontal[i][1]] = 3
            board[BoatFinalPositionHorizontal[0][0] + 1][BoatFinalPositionHorizontal[i][1]] = 3
            }
      }
        board[BoatFinalPositionHorizontal[0][0]][min-1] = 3
        board[BoatFinalPositionHorizontal[0][0]][max+1] = 3
    })
    if (BoatFinalPositionHorizontal[BoatFinalPositionHorizontal.length-1][1] + 1 > 9) {
      endrow = 9
    } else {
        endrow = BoatFinalPositionHorizontal[BoatFinalPositionHorizontal.length-1][1]
    }

  }
}

// if (BoatDirection === "vertical") {
//   BoatFinalPositionVertical.forEach(function (value, index, array) {
//     if (index === 0) {
//       min = BoatFinalPositionVertical[0][0]
//     }
//     if (index === (BoatFinalPositionVertical.length -1)) {
//       max = BoatFinalPositionVertical[BoatFinalPositionVertical.length-1][0]
//     }
//   })
//   BoatFinalPositionVertical.forEach(function (value, index, array) {
//     for (var i = 0; i < length; i++) {
//       board
//     }
//   })
// }

// var max = 0
// var min = 0
// currentshiparray.forEach(function (element, index, array) {
//   if (shipOrientation === 'horizontal') {
//     if (index === 0) {
//       min = element[1]
//     } else if (index === array.length - 1) {
//       max = element[1]
//     }
//   } else if (shipOrientation === 'vertical') {
//     if (index === 0) {
//       min = element[0]
//     } else if (index === array.length - 1) {
//       max = element[0]
//     }
//   }
// })
//
// // Make sure no negativ mins and maxes
//
//
// if (shipOrientation === 'horizontal') {
//   var startRow = 0
//   var endRow = 0
//
//   if (currentshiparray[0][0] - 1 < 0) {
//     startRow = 0
//   } else {
//     startRow = currentshiparray[0][0]
//   }
//
//   if ( currentshiparray[0][0] + 1 > board.length - 1 ) {
//     endRow = currentshiparray[0][0]
//   } else {
//     endRow = currentshiparray[0][0] + 1
//   }
//
//   for (var i = currentshiparray[0][0] - 1; i < ) {
//
//   }
//
//   currentshiparray.forEach(function (element, index, array) {
//     gridArray[ currentshiparray[0][0] - 1 ][currentshiparray[0][1]]
//     gridArray[ currentshiparray[0][0] + 1 ][currentshiparray[1][1]]
//   })
//   gridArray[ currentshiparray[0][0] - 1 ][]
//   gridArray[ currentshiparray[0][0] + 1 ]
//   gridArray[currentshiparray[0][0]   ][min -1]
//   gridArray[currentshiparray[0][0]   ][max +1]
//
// } else if (shipOrientation === 'vertical') {
//
// }
