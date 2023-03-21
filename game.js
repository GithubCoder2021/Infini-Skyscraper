let floors = -Infinity;
let advance = 0;

setInterval(function(){
	document.getElementById("floor").innerText = normal(floors);
  document.getElementById("flPS").innerText = normal(advance);
  floors = addLogs(floors,divideLogs(advance,1.30103));
},50);
