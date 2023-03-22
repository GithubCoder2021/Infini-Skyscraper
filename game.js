var game = {
 floors : -Infinity,
 advance: 0,
 speedCost: 0.699,
 sacrificeMult: 0,
 sacGain: 0
 };


setInterval(function(){
	document.getElementById("floor").innerText = normal(game.floors);
  document.getElementById("flPS").innerText = normal(game.advance);
  document.getElementById("spCost").innerText = normal(game.speedCost);
  if (game.sacGain <= 308){
  document.getElementById("sacrifice").innerText = (10 ** game.sacGain).toFixed(3);
  }else{
  document.getElementById("sacrifice").innerText = normal(game.sacGain);
  }
  game.floors = addLogs(game.floors,divideLogs(game.advance,1.30103));
  game.sacGain = (divideLogs(game.floors,3))*0.32;
  if (game.floors >= 3){
  document.getElementById("sacButton").style.display = "inline-block";
  }else{
  document.getElementById("sacButton").style.display = "none";
  }
},50);

function speedInc(){
	if (game.floors >= game.speedCost){
  	game.floors = subtractLogs(game.floors,game.speedCost);
    game.advance = addLogs(game.advance,multiplyLogs(0,game.sacrificeMult));
    game.speedCost = multiplyLogs(game.speedCost,0.4);
    
  }
}

function loadGame(){
var savegame = JSON.parse(localStorage.getItem("skyscraper"));
if (savegame !== null) {
  game = savegame;
}

if (typeof savegame.floors !== "undefined") game.floors = savegame.floors;

if (typeof savegame.advance !== "undefined") game.advance = savegame.advance;

if (typeof savegame.speedCost !== "undefined") game.speedCost = savegame.speedCost;

if (typeof savegame.sacrificeMult !== "undefined") game.sacrificeMult = savegame.sacrificeMult;
}

function save() { 
  localStorage.setItem("skyscraper", JSON.stringify(game));
}

function resetGame(){
 restart =confirm("Are you sure? All of your progress will be gone!");
 if (restart == true) {
	game.floors = -Infinity;
	game.advance = 0;
	game.speedCost = 0.699;
  game.sacrificeMult = 0;
   save();
  }
}


function sacrifice(){
	sacrificeCon =confirm("You will gain a Sacrificial multiplier at the expense of your progress. Are you sure you want to sacrifice your journey?");
 if (sacrificeCon == true) {
  game.sacrificeMult = multiplyLogs(game.sacrificeMult,game.sacGain);
	game.floors = -Infinity;
	game.advance = game.sacrificeMult;
	game.speedCost = 0.699;
  
  }
}

loadGame();
