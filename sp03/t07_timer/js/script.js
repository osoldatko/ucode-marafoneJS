class Timer {
    constructor(titl, delay, stopCount) {
        this.titl = titl;
        this.delay = delay;
        this.stopCount = stopCount;
    }
    start() {
        console.log(`Timer ${this.titl} started (delay=${this.delay},  stopCount=${this.stopCount})`);
        this.timer = setInterval(() => this.tick(), this.delay);
    }
    tick() {
        this.stopCount--;
        console.log(`Timer ${this.titl} Tick! | cycles left ${this.stopCount}`);
        if (this.stopCount === 0) {
            this.stop();
        }
    }
    stop() {
        clearInterval(this.timer);
        console.log(`Timer ${this.titl} stopped`);
    }
}
function runTimer(id, delay, counter) {
    new Timer(id, delay, counter).start();
}