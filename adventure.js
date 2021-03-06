// Alexandre Cornu
// 2020/2/1

var maze = [
  ["■","■","■","■","■","■","■","■","■"],
  ["■","S","■","■","■","■","■","🕮","■"],
  ["■"," "," "," "," "," "," "," ","■"],
  ["■","■"," ","■","⚔","■","■"," ","■"],
  ["■"," "," ","■"," ","■","■"," ","■"],
  ["■"," ","■","■","■","e","B"," ","■"],
  ["■"," ","■","■","■","■","■"," ","■"],
  ["■"," ","N","■","K"," "," "," ","■"],
  ["■","■","■","■","■","■","■","■","■"],
]
var visited = [ 
   [false,false,false,false,false,false,false,false,false],
   [false,false,false,false,false,false,false,false,false],
   [false,false,false,false,false,false,false,false,false],
   [false,false,false,false,false,false,false,false,false],
   [false,false,false,false,false,false,false,false,false],
   [false,false,false,false,false,false,false,false,false],
   [false,false,false,false,false,false,false,false,false],
   [false,false,false,false,false,false,false,false,false],
   [false,false,false,false,false,false,false,false,false],
   [false,false,false,false,false,false,false,false,false]
]
//B: To enter you must have battled the 2 Guardians
//⚔: you have found a SWORD!
//N: You must have the Sword to fight this Ninja, if not, you die.
//K: you must have a magic Book to fight this Kraken, if not, you die.
//🕮: you have found a MAGIC BOOK!
//S: START!!
//e: you have beat this game congratulation!!
x = 1
y = 1
hasMagicBook = false
hasSword = false

function showMaze (){
  var i; var j
  for (i = 0; i < maze.length; i++) {
    var line = ""
    for (j = 0; j < maze[i].length; j++) {
      if (visited[i][j]) {
        var cell = maze[i][j]
        if (cell == " ") {
          cell = "🦶"
        }
        line = line+cell
      }
      else {
        line = line+ " "
      }
    }
    console.log (line)
  }
}
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {

  if (key.name == "up"){
    console.log ("you are going up")
    newY = y - 1
    newX = x 
  }
  if (key.name == "down"){
    console.log ("you are going down")
    newY = y + 1
    newX = x
  }
  if (key.name == "left"){
    console.log ("you are going left")
    newX = x - 1
    newY = y
  }
  if (key.name == "right"){
    console.log ("you are going right")
    newX = x + 1
    newY = y
  }
visited[newY][newX] = true

  if (maze [newY][newX] == "■"){
    console.log ("you hit a wall")
    showMaze ()
    return
  }
  x = newX
  y = newY
  if (maze [y][x] == "⚔"){
    console.log ("you found a SWORD")
    hasSword = true 
    maze [y][x] = " "
  }
  console.log (y,x)
  if (maze [y][x] == "N"){
    console.log ("NINJA FIGHT!")
    if (hasSword){
      console.log ("🕮you win the fight!⚔")
    } else{
      console.log ("you're dead")
      showMaze ()
      process.exit(1);
    }
  }
  if (maze [y][x] == "🕮"){
    console.log ("you found a MAGICBOOK")
    hasMagicBook = true
    maze [y][x] = " "
  }
  if (maze [y][x] == "K"){
    console.log ("RELEASE THE KRAKEN!")
    if (hasMagicBook){
      console.log ("🕮you win the magic fight!⚔")
    } else{
      console.log ("🕮you're dead⚔")
      showMaze ()
      process.exit(1);
    }
  }
  visited [y][x] = true
  showMaze ()
})
