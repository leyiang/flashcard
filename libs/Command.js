class Command {

    constructor( commandForm ) {
        this.showing = false;
        this.commandForm = commandForm;
        this.commandInput = commandForm.querySelector("#command");
        this.hide();

        this.callbacks = {};
        this.specialCallbacks = [];

        this.listen();
    }

    hide() {
        this.showing = false;
        this.commandForm.style.visibility = "hidden";
    }

    show() {
        this.showing = true;
        this.commandForm.style.visibility = "visible";
        this.commandInput.focus();
    }

    on(pattern, fn) {
        if( /\[[a-zA-Z0-9]*\]/.test(pattern) ) {
            this.specialCallbacks.push([
                // Checker
                (line) => /\[([a-zA-Z0-9]*)\]/.test(line),
                // Fn
                fn,
            ])
        } else {
            this.callbacks[ pattern ] = fn;
        }
    }

    emit( line ) {
        let callback = null;
        if( line in this.callbacks ) {
            callback = this.callbacks[ line ];
            callback();
        } else {
            if( line[0] === ":" ) {
                const subject = line.slice(1);
                const fn = this.callbacks["subject"];
                fn( subject );
            }
        }
    }

    listen() {
        this.commandInput.addEventListener("blur", e => {
            this.hide();
        });

        this.commandForm.addEventListener("submit", e => {
            e.preventDefault();
            const line = this.commandInput.value.trim();
            this.commandInput.value = "";
            this.emit( line );
        });

        document.addEventListener("keydown", e => {
            if( e.key.toLowerCase() === "/" ) {
                e.preventDefault();
                if( this.showing ) {
                    this.hide();
                } else {
                    this.show();
                }
            }
        });
    }
}