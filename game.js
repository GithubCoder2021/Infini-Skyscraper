let floors = -Infinity;
let advance = 0;
let speedCost = 0;

setInterval(function(){
	document.getElementById("floor").innerText = normal(floors);
  document.getElementById("flPS").innerText = normal(advance);
  document.getElementById("spCost").innerText = normal(speedCost);
  floors = addLogs(floors,divideLogs(advance,1.30103));
},50)

function speedInc(){
  if (floors >= speedCost){
    floors = subtractLogs(floors,speedCost);
    advance = multiplyLogs(advance,0.30103);
    speedCost = multiplyLogs(speedCost,0.3);   
  }
}

function loadGame(){
var savegame = JSON.parse(localStorage.getItem("skyscraper"))
if (savegame !== null) {
  game = savegame
}

if (typeof savegame.floors !== "undefined") game.floors = savegame.floors;

if (typeof savegame.advance !== "undefined") game.advance = savegame.advance;

if (typeof savegame.speedCost !== "undefined") game.speedCost = savegame.speedCost;
}

function save() { 
  localStorage.setItem("skyscraper", JSON.stringify(game));
}

function resetGame(){
 restart =confirm("Are you sure? All of your progress will be gone!");
 if (restart == true) {
	game.floors = -Infinity;
	game.advance = 0;
	game.speedCost = 1;
   save();
  }
}
loadGame();
