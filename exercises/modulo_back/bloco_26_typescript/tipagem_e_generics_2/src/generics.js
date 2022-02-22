"use strict";
class ProcessIdentity {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let processor = new ProcessIdentity(100, "Olá");
processor.getIdentity(); // imprime "Olá" e retorna 100
