class PrincipalControl{
    constructor(data){
        this.minute = 25;
        this.second = 0;
        this.pomodoroDuration = 25;
        this.shortBreakDuration = 5;
        this.longBreakDuration = 15;
        this.cycles = 4;
        this.currentCycle = 1;
        this.currentActivity = data.currentActivity;
        this.timer;
    }

    runMyTimer(){
        this.timer = setInterval(() => {
            if(this.second == 0){
                this.minute--;
                this.second = 59;
            }else{
                this.second--;
            }
            currentTime.innerHTML = this.minute + ":" + this.second;
            if(this.minute == 0 && this.second == 0){
                this.currentCycle++;
                this.minute = this.pomodoroDuration;
                this.second = 0;
                if(this.currentCycle > this.cycles){
                    this.currentCycle = 1;
                }
                this.currentActivity.innerHTML = this.getActivity();
            }
        }, 1000);
    }

    stopMyTimer(){
        clearInterval(this.timer);
    }

    playMyTimer(){
        this.runMyTimer();
    }


}