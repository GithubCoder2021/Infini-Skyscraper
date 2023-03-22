var game = {
 floors : -Infinity,
 advance: 0,
 speedCost: 1
 }


setInterval(function(){
	document.getElementById("floor").innerText = normal(game.floors);
  document.getElementById("flPS").innerText = normal(game.advance);
  document.getElementById("spCost").innerText = normal(game.speedCost);
  game.floors = addLogs(game.floors,divideLogs(game.advance,1.30103));
},50)

function speedInc(){
	if (game.floors >= game.speedCost){
  	game.floors = subtractLogs(game.floors,game.speedCost);
    game.advance = multiplyLogs(game.advance,0.30103);
    game.speedCost = multiplyLogs(game.speedCost,0.3);
    
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
