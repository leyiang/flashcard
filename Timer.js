export default class Timer {
    constructor( loopFn ) {
        this.tid = null;
        this.seconds = 0;
        this.started = false;

        this.loopCallback = loopFn;
    }

    start(timeout = 1000) {
        if( this.started ) return;

        this.started = true;
        this.loopCallback?.();

        this.tid = setInterval(() => {
            this.loop();
        }, timeout );
    }

    restart() {
        this.seconds = 0;
        this.loopCallback?.();
    }

    loop() {
        this.seconds ++;
        this.loopCallback?.();
    }

    static Format( seconds ) {
        let overflow = false;
        let minutes = Math.floor( seconds / 60 );

        if( minutes > 99 ) {
            minutes = 99;
            overflow = true;
        }

        let sec = overflow ? 59 : seconds % 60;

        return minutes.toString().padStart(2, "0")
            + ":"
            + sec.toString().padStart(2, "0");
    }
}