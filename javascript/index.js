
//importamos la clase
import PrincipalControl from "/javascript/PrincipalControl.js";

//Obtengo los elementos del html
let currentTime = document.getElementById("currentTime");
let currentCycle = document.getElementById("currentCycle");
let btnPlayPause = document.getElementById("btnPlayPause");
let lblShortBreak = document.getElementById("shortBreak");
let lblLongBreak = document.getElementById("longBreak");
let lblPomodoroTime = document.getElementById("pomodoroTime");



const activitiesList = {
    "POMODORO": 0,
    "SHORT_BREAK": 1,
    "LONG_BREAK": 2,
}

//Guardo en un objeto todos los elementos html que necesite.
let myHtmlElements = {
    currentTime, 
    currentCycle, 
    btnPlayPause, 
    activitiesList,
    lblShortBreak,
    lblLongBreak,
    lblPomodoroTime
};



let defaultSettings = {
    pomodoroDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 15,
    cycles: 4,
    currentActivity: activitiesList["POMODORO"],
}

//Para hacer las pruebas
const testValues = {
    pomodoroDuration: 1,
    shortBreakDuration: 1,
    longBreakDuration: 1,
    cycles: 2,
    currentActivity: activitiesList["POMODORO"],
}


//Creo un objeto de la clase PrincipalControl
let principalControl = new PrincipalControl(defaultSettings, myHtmlElements);

//Agrego las funciones
btnPlayPause.addEventListener("click", () => {
    if(btnPlayPause.innerHTML == "Play"){
        btnPlayPause.innerHTML = "Pause";
        principalControl.playMyTimer();
    }else{
        btnPlayPause.innerHTML = "Play";
        principalControl.stopMyTimer();
    }
});


