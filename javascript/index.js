currentActivity = document.getElementById("currentActivity");
currentTime = document.getElementById("currentTime");
btnPlayPause = document.getElementById("btnPlayPause");

btnPlayPause.addEventListener("click", () => {
    if(btnPlayPause.innerHTML == "Play"){
        btnPlayPause.innerHTML = "Pause";
        principalControl.playMyTimer();
    }else{
        btnPlayPause.innerHTML = "Play";
        principalControl.stopMyTimer();
    }
});

let data = {currentActivity, currentTime, btnPlayPause};

  

let principalControl = new PrincipalControl(data);

