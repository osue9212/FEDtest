"use strict";
// villain.ts
exports.__esModule = true;
var Villain = /** @class */ (function () {
    function Villain(name, health) {
        if (health === void 0) { health = 100; }
        this.health = 50;
        this.name = name;
        this.health = health;
    }
    Villain.prototype.attacked = function (attackValue) {
        if (attackValue > this.health) {
            console.log(this.name + " is no more.");
        }
        else {
            this.health -= attackValue;
            console.log("Villain attacked: " + attackValue + " -- " + this.health);
        }
    };
    return Villain;
}());
exports.Villain = Villain;
