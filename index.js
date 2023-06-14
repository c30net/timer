class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick();
        this.intervalStopper = setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this.intervalStopper);
    };

    notif() {
        var audio = new Audio('notif.wav');
        audio.play();
    }

    tick = () => {
        this.timeRemaining = this.timeRemaining - 1;
        if (this.timeRemaining == 0) {
            this.notif();
            this.pause();
        }
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}

const duration = document.getElementById('duration');
const start = document.getElementById('start');
const pause = document.getElementById('pause');

const timer1 = new Timer(duration, start, pause);
