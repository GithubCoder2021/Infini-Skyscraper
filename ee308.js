
function normal(log) {
  if (log != Infinity) {
    if (log >= 1e21) {
       return "e" + log;
    } else if (log >= 6) {
       return (Math.round(10**(log - Math.floor(log))*1000))/1000 + "e" + Math.floor(log);
    } else if (log >= -Infinity) {
       return Math.floor(10 ** log);
    } else {
       return 0;
    }
  } else {
   return "Eternity";
  }
}

function addLogs(a,b){
  if (a > b) {
    return a + (Math.log10(1+(10**(b - a))));
  } else {
    return a + (Math.log10(1+(10**(a - b))));
  }
}

function subtractLogs(a,b){
  if (a > b) {
    return a + (Math.log10(1+(0 -(10**(b - a)))));
  } else {
    return -Infinity;
  }
}

function multiplyLogs(a,b) {
  return a + b;
}

function divideLogs(a,b) {
  return a - b;
}

function exponentLogs(a,b,bInLog) {
  if (bInLog == 0) {
    return a * b;
  } else {
    return a * (10**b);
  } 
}
