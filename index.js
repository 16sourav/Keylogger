const logDiv = document.getElementById('log');
const stateDiv = document.getElementById('state');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

startBtn.addEventListener("click",()=>{
    logDiv.textContent="";
    stateDiv.textContent="";
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleUp);
    startBtn.style.color="black";
    stopBtn.style.color="red";
})

stopBtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleUp);
    logDiv.textContent="Press Start to start Logging";
    stateDiv.textContent="Press start to start Logging";
    startBtn.style.color="red";
    stopBtn.style.color="black";
})

function handleDown(e){
    logDiv.textContent=`Key ${e.key} pressed down`;
    stateDiv.textContent=`Key is down`;
}

function handleUp(e){
    logDiv.textContent=`Key ${e.key} pressed up`;
    stateDiv.textContent=`Key is up`;
}
