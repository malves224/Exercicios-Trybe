"use strict";
class tv {
    constructor(size, resolution, connections, connectedTo) {
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
        this.connectedTo = connectedTo;
    }
    turnOn() {
        console.log(`tv ligada, tamanho ${this.size}, resolução com ${this.resolution} conectado a entrada ${this.connectedTo}`);
    }
    getter() {
    }
    set setter(connection: string): void {
        const hasConnections = this.connections.includes(connection);
        if (!hasConnections) {
            return console.log("Sorry, connection unavailable!");
        }
        this.connectedTo = connection;
        return console.log(`connectado em ${this.connectedTo}`);
    }
}
const tvLg = new tv('49p', '1980x1280', ['HDMI', 'VGA'], 'HDMI');
tvLg.turnOn();
tvLg.setter("VGA");
