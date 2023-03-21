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
