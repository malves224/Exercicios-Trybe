class tv {
  private _size: string;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;
  
  constructor(size: string, resolution: string, connections: string[], connectedTo: string) {
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this._connectedTo = connectedTo;
  }

  turnOn() {
    console.log(`tv ligada, tamanho ${this._size}, resolução com ${this._resolution} conectado a entrada ${this.connectedTo}`);
  }

  get connectedTo():string {
    return this._connectedTo;
  }

  set connectedTo(connection: string) {
    const hasConnections = this._connections.includes(connection);        
    if (!hasConnections) {
      console.log("Sorry, connection unavailable!");
    }
    this._connectedTo = connection;
  }
}

const tvLg = new tv('49p', '1980x1280', ['HDMI', 'VGA'], 'HDMI');
tvLg.turnOn();
tvLg.connectedTo = 'VGA';
console.log(tvLg.connectedTo);