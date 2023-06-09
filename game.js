var game = {
  floors: -Infinity,
  advance: 0,
  speedCost: 0.477,
  sacrificeMult: 0,
  sacGain: 0,
  lastTick: Date.now()
};


setInterval(function() {
document.getElementById("floor").innerText = normal(game.floors);
document.getElementById("flPS").innerText = normal(game.advance);
if (game.sacrificeMult <= 6) {
  document.getElementById("sMult").innerText = (10 ** game.sacrificeMult).toFixed(2);
} else {
  document.getElementById("sMult").innerText = normal(game.sacGain);
}

document.getElementById("spCost").innerText = normal(game.speedCost);
if (game.sacGain <= 6) {
  document.getElementById("sacrifice").innerText = (10 ** game.sacGain).toFixed(2);
} else {
  document.getElementById("sacrifice").innerText = normal(game.sacGain);
}
game.sacGain = (divideLogs(game.floors, 3)) * 0.4;
if (game.floors >= 2.477) {
  document.getElementById("sacButton").style.display = "inline-block";
} else {
  document.getElementById("sacButton").style.display = "none";
}
updateAch();

game.floors = addLogs(game.floors, divideLogs(game.advance, 1.30103));
if (game.sacrificeMult <= 0) {
    document.getElementById("sacMult").style.display = "none";
  } else{
    document.getElementById("sacMult").style.display = "block";
  }
}, 50);

function speedInc() {
  if (game.floors >= game.speedCost) {
    game.floors = subtractLogs(game.floors, game.speedCost);
    game.advance = addLogs(game.advance, multiplyLogs(0, game.sacrificeMult));
    game.speedCost = multiplyLogs(game.speedCost, 0.3);

  }
}

function loadGame() {
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

function resetGame() {
  restart = confirm("Are you sure? All of your progress will be gone!");
  if (restart == true) {
    game.floors = -Infinity;
    game.advance = 0;
    game.speedCost = 0.477;
    game.sacrificeMult = 0;
    save();
    location.reload();
  }
}


function sacrifice() {
  sacrificeCon = confirm("You will gain a Sacrificial multiplier at the expense of your progress. Are you sure you want to sacrifice your journey?");
  if (sacrificeCon == true) {
    game.sacrificeMult = addLogs(game.sacrificeMult, game.sacGain);
    game.floors = -Infinity;
    game.advance = game.sacrificeMult;
    game.speedCost = 0.477;

  }
}

loadGame();

function tab(tab) {
  document.getElementById("elevator").style.display = "none";
  document.getElementById("achievements").style.display = "none";
  document.getElementById("options").style.display = "none";
  document.getElementById(tab).style.display = "inline-block";
}

function updateAch() {
  if (game.advance > 0) {
    document.getElementById("ach1").style.color = "#42f55d";
  }
  if (game.advance >= 1) {
    document.getElementById("ach2").style.color = "#42f55d";
  }
  if (game.floors >= 2.0086) {
    document.getElementById("ach3").style.color = "#42f55d";
  }
  if (game.floors >= 2.6989) {
    document.getElementById("ach4").style.color = "#42f55d";
  }
  if (game.sacrificeMult > 0) {
    document.getElementById("ach5").style.color = "#42f55d";
  }
}

tab('elevator');
