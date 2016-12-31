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

// each array is in itself a seperate element so need to put commas between them
// var size = 50
// var space = 50
var ROW = board.length
var COLUMN = board[0].length

// note: everything is being measured from the top left hand corner of the square ---> that is the (0,0) origin position
$("body").prepend($("<button>", {id: "patrolboat", "class": "shipbutton"}), $("<button>", {id: "sub", "class": "shipbutton"}), $("<button>", {id: "destroyer", "class": "shipbutton"}), $("<button>", {id: "carrier", "class": "shipbutton"}), $("<button>", {id: "rotate", "class": "shipbutton"}));

for (var row = 0; row < ROW; row++) {
  for (var column = 0; column < COLUMN; column++) {
    // each cell to be set within a div
    // each cell has a class called cell
    // use the class function to set the style of the cell
    // set border, position
    // add click listener
    var $div = $("<div>", {class: "cell", id:"R"+row+"C"+column})
    $div.insertBefore(".script")
  }
}


// if id is defined locally, the id+=1 will always = 0 --> why
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
// when row 0 - 8 are clicked, data is stored here
var changeColor = []
// to when row 9 is clicked
var changeColor9 = []
var White = []
var boxClick = []

function colorACell(row,column,color) {
  $("#" +"R"+row+"C"+column).css("background-color", color)
}

var shipDirection = "horizontal"
function makeBoat(row, column, length) {

  for(var i = 0; i < length; i++) {
    colorACell(row, (column+i), "red")
    var arr = $.makeArray(row)
    arr.push(column+i)
    changeColor.push(arr)

    if (shipDirection === "horizontal") {
      $("#" +"R"+row+"C"+column).click(function () {
      colorACell((row+1), column, "red")
      colorACell(row, (column+1), "white")
      shipDirection = "vertical"
      })
    }

    else if (shipDirection === "vertical") {
      $("#" +"R"+row+"C"+column).click(function () {
        colorACell(row, (column+1), "red")
        colorACell((row+1), column, "white")
        shipDirection = "horizontal"
      })
    }
  }
  for (var i = 0; i < length; i++)
    if (column === 9) {
      colorACell((row+i), 9, "red")
      var arr9 = $.makeArray((row+i))
      arr9.push(9)
      changeColor9.push(arr9)
    }
}

// changeColor.length === length of ship
// makeWhite: when user clicks on another square, previous squares turn white, current click turns red.
function makeWhite(row, column) {
    for (var index = 0; index < changeColor.length; index++) {
      if (row === changeColor[index][0] && column === changeColor[index][1]) {
        colorACell((changeColor[index][0]), changeColor[index][1], "black")
        console.log("makewhite2"+changeColor);
        changeColor = []
        console.log("does it switch");
      }
    }
}

$("#patrolboat").append("Patrol boat").click(function () {
  for (let row = 0; row < ROW; row++) {
    for (let column = 0; column < COLUMN; column++) {
      $("#" +"R"+row+"C"+column).click(function () {
        makeBoat(row, column, 2)
        for (let index = 0; index < changeColor.length; index++) {
          console.log(changeColor[index][0]);
          if (row === changeColor[index][0] && column === changeColor[index][1]) {
            $("#" +"R"+row+"C"+column).click(function () {
              makeWhite(row, column)
          })
        }
        }
      })
    }
  }
})


$("#sub").append("Submarine")
$("#destroyer").append("Destroyer")
$("#carrier").append("Carrier")
$("#rotate").append("Rotate")
