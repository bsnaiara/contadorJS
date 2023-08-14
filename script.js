var hora = 0;
var min = 0;
var seg = 0;
var  milisegundo = 0;
var cronometro;

restart();
function timer(){
    if((milisegundo+=10) == 1000){
        milisegundo = 0;
        segundo++;
    }
    if(segundo == 60){
        segundo = 0;
        minuto++;
        }
    if(minuto == 60){
        segundo = 0;
        hora++;
    }
    
    document.getElementById('segundo').innerText = returnData(segundo);
    document.getElementById('minuto').innerText = returnData(minuto);
    document.getElementById('hora').innerText = returnData(hora);
}

function start(){
    stop();
    cronometro = setInterval(() => {timer(); }, 10);
}

function stop(){
    clearInterval(cronometro);
}

function restart(){
    hora = 0;
    minuto = 0;
    segundo = 0;
    milisegundo = 0;
    document.getElementById("hora").innerText= '00';
    document.getElementById("minuto").innerText= '00';
    document.getElementById("segundo").innerText= '00';
}


function returnData(input) {
  return input > 9 ? input : `0${input}`
}
