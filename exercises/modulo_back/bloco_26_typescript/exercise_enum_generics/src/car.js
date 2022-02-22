var Color;
(function (Color) {
    Color["PRETA"] = "preta";
    Color["BRANCA"] = "branca";
    Color["VERMELHA"] = "vermelha";
    Color["PRATA"] = "prata";
})(Color || (Color = {}));
var Direction;
(function (Direction) {
    Direction["LEFT"] = "esquerda";
    Direction["RIGHT"] = "direia";
})(Direction || (Direction = {}));
var Dors;
(function (Dors) {
    Dors["DRIVER"] = "Da pessoa motorista";
    Dors["RIDE"] = "Da pessoa carona";
    Dors["BEHIND_DRIVER"] = "De tr\u00E1s da pessoa motorista";
    Dors["BEHIND_RIDE"] = "De tr\u00E1s da pessoa carona";
})(Dors || (Dors = {}));
var Car = /** @class */ (function () {
    function Car(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    Car.prototype.honk = function () {
        console.log("car ".concat(this.brand, " buzinando"));
    };
    Car.prototype.openTheDoor = function (door) {
        console.log("abrindo porta ".concat(door));
    };
    Car.prototype.closeTheDor = function (door) {
        console.log("fechando porta ".concat(door));
    };
    Car.prototype.turnOn = function () {
        console.log("carro ".concat(this.brand, " ligado"));
    };
    Car.prototype.turnOff = function () {
        console.log("carro ".concat(this.brand, " desligado"));
    };
    Car.prototype.speedUp = function () {
        console.log("carro ".concat(this.brand, " acelerando"));
    };
    Car.prototype.speedDown = function () {
        console.log("carro ".concat(this.brand, " freando"));
    };
    Car.prototype.stop = function () {
        console.log("carro ".concat(this.brand, " parou"));
    };
    Car.prototype.turn = function (direct) {
        console.log("carro ".concat(this.brand, " virando a ").concat(direct, " "));
    };
    return Car;
}());
var car1 = new Car('Corsa', Color.VERMELHA, 4);
car1.speedUp();
car1.openTheDoor(Dors.BEHIND_DRIVER);
car1.closeTheDor(Dors.BEHIND_DRIVER);
car1.turn(Direction.LEFT);
car1.turn(Direction.RIGHT);
