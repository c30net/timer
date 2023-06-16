class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.intervalStopper = setInterval(this.tick, 20);
    };

    pause = () => {
        clearInterval(this.intervalStopper);
    };

    notif() {
        var audio = new Audio('notif.wav');
        audio.play();
    }

    tick = () => {
        this.timeRemaining = this.timeRemaining - 0.02;
        if (this.onTick) {
            this.onTick(this.timeRemaining);
        }
        if (this.timeRemaining <= 0) {
            if (this.onComplete) {
                this.onComplete();
            }
            this.notif();
            this.pause();
        }
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}
