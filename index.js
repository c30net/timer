function random_rgb() {
    let o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
}
const duration = document.getElementById('duration');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const circle = document.querySelector('circle');
let t0talTime = 0;
let offset = 1;
let circumference = 2 * Math.PI * circle.getAttribute('r');
circle.setAttribute('stroke-dasharray', circumference);
circle.setAttribute('stroke', random_rgb());

const timer1 = new Timer(duration, start, pause, {
    onStart(totalTime) {
        t0talTime = totalTime;
    },
    onTick(timeRemaining) {
        offset = (circumference * timeRemaining) / t0talTime - circumference;
        circle.setAttribute('stroke-dashoffset', offset);
    },
    onComplete() {
        console.log('Timer is completed');
    },
});
