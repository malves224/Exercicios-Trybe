"use strict";
var daysWeek;
(function (daysWeek) {
    daysWeek[daysWeek["monday"] = 1] = "monday";
    daysWeek[daysWeek["tuesday"] = 2] = "tuesday";
    daysWeek[daysWeek["wednesday"] = 3] = "wednesday";
    daysWeek[daysWeek["thursday"] = 4] = "thursday";
    daysWeek[daysWeek["friday"] = 5] = "friday";
})(daysWeek || (daysWeek = {}));
var rainbowColors;
(function (rainbowColors) {
    rainbowColors["red"] = "vermelho";
    rainbowColors["orange"] = "laranja";
    rainbowColors["yellow"] = "amarelo";
    rainbowColors["green"] = "verde";
    rainbowColors["blue"] = "azul";
})(rainbowColors || (rainbowColors = {}));
var actions;
(function (actions) {
    actions[actions["abrir"] = 1] = "abrir";
    actions[actions["visualizar"] = 2] = "visualizar";
    actions[actions["salvar"] = 3] = "salvar";
    actions[actions["imprimir"] = 4] = "imprimir";
    actions[actions["fechar"] = 5] = "fechar";
})(actions || (actions = {}));
var cardinalPoints;
(function (cardinalPoints) {
    cardinalPoints["norte"] = "N";
    cardinalPoints["leste"] = "L";
    cardinalPoints["sul"] = "S";
    cardinalPoints["oeste"] = "O";
})(cardinalPoints || (cardinalPoints = {}));
const actionAbrir = actions[1];
const cardinalPointsLeste = cardinalPoints.leste;
console.log(actionAbrir);
console.log(cardinalPointsLeste);
console.log(rainbowColors['red']);
console.log(daysWeek[5]);
