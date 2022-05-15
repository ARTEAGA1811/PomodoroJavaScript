//Agrego las clases
export default class PrincipalControl{
    constructor(data, myHtmlElements){
        this.minute = data.pomodoroDuration;
        this.second = 0;
        this.pomodoroDuration = data.pomodoroDuration;
        this.shortBreakDuration = data.shortBreakDuration;
        this.longBreakDuration = data.longBreakDuration;
        this.cycles = data.cycles;
        this.currentCycle = 1;
        this.currentActivity = data.currentActivity;
        this.timer;

        this.currentTime = myHtmlElements.currentTime;
        this.curCycleHtml = myHtmlElements.currentCycle;
        this.btnPlayPause = myHtmlElements.btnPlayPause;
        this.activitiesList = myHtmlElements.activitiesList;
        this.lblShortBreak = myHtmlElements.lblShortBreak;
        this.lblLongBreak = myHtmlElements.lblLongBreak;
        this.lblPomodoroTime = myHtmlElements.lblPomodoroTime;


        this.updateActivityView();
        this.updateTimeView();
        this.updateCycleView();
    }

    runMyTimer(){
        this.timer = setInterval(() => {

            //Aqui es cuando termina todo el tiempo.
            if(this.second == 0 && this.minute == 0){
                this.stopMyTimer();
                this.btnPlayPause.innerHTML = "Play";

                this.updateActivity();

            }else{ // Aqui es el flujo natural del pomodoro.
                this.second--;
                if(this.second < 0){        
                    this.second = 59;
                    this.minute--;
                }
            }
           
            //Actualizo la vista del tiempo
            this.updateTimeView();
            //Actualizo la vista del ciclo
            this.updateCycleView();

        }, 1000);
    }

    stopMyTimer(){
        clearInterval(this.timer);
    }

    playMyTimer(){
        this.runMyTimer();
    }

    //Crea un string con el formato para la vista.
    updateTimeView(){
        let myTimeView = ((this.minute>=10)
                            ?String(this.minute):String("0"+this.minute))
                            +":"+
                        ((this.second>=10)
                            ?String(this.second):String("0"+this.second));
                            
        this.currentTime.innerHTML = myTimeView;
    }

    updateCycleView(){
        this.curCycleHtml.innerHTML = this.currentCycle + "/" + this.cycles;
    }

    updateActivityView(){
        if(this.currentActivity == this.activitiesList["POMODORO"]){
            this.lblPomodoroTime.classList.add("curr_activity");
            this.lblShortBreak.classList.remove("curr_activity");
            this.lblLongBreak.classList.remove("curr_activity");
        }else if(this.currentActivity == this.activitiesList["SHORT_BREAK"]){
            this.lblShortBreak.classList.add("curr_activity");
            this.lblPomodoroTime.classList.remove("curr_activity");
            this.lblLongBreak.classList.remove("curr_activity");
        }else if(this.currentActivity == this.activitiesList["LONG_BREAK"]){
            this.lblLongBreak.classList.add("curr_activity");
            this.lblPomodoroTime.classList.remove("curr_activity");
            this.lblShortBreak.classList.remove("curr_activity");
            
        }else{
            console.log("Error: No se encontro la actividad");
        }
    }
    


    updateActivity(){
        if(this.currentActivity == this.activitiesList["POMODORO"] && this.currentCycle < this.cycles){
            this.currentActivity = this.activitiesList["SHORT_BREAK"];
            console.log("Me toca el short break");
            //SE debe actualizar la vista de la actividad que me toca. toca short
            this.updateActivityView();
            this.minute = this.shortBreakDuration;
            this.second = 0;

        }else if(this.currentActivity == this.activitiesList["SHORT_BREAK"] || this.currentActivity == this.activitiesList["LONG_BREAK"]){
            if(this.currentActivity == this.activitiesList["SHORT_BREAK"]){
                this.currentCycle++;
            }else{
                this.currentCycle = 1;
            }

            this.currentActivity = this.activitiesList["POMODORO"];
            console.log("Me toca el pomodoro");
            //Se debe actualizar la vista de la actividad que me toca. toca pomodoro.
            this.updateActivityView();
            this.minute = this.pomodoroDuration;
            this.second = 0;
        }

        else if(this.currentActivity == this.activitiesList["POMODORO"] && this.currentCycle == this.cycles){
            console.log("Me toca el long break");
            this.currentActivity = this.activitiesList["LONG_BREAK"];
            //Se debe actualizar la vista de la actividad que me toca. toca long
            this.updateActivityView();

            this.minute = this.longBreakDuration;
            this.second = 0;
        }
        else{
            console.log("Something is wrong");
        }
    }


} 