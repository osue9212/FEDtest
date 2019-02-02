"use strict";
// hero.ts
exports.__esModule = true;
var Hero = /** @class */ (function () {
    function Hero(name, health) {
        if (health === void 0) { health = 100; }
        this.health = 100;
        this.name = name;
        this.health = health;
    }
    Hero.prototype.attacked = function (attackValue) {
        if (attackValue > this.health) {
            console.log(this.name + " is no more.");
        }
        else {
            this.health -= attackValue;
            console.log("Hero attacked: " + attackValue + " -- " + this.health);
        }
    };
    return Hero;
}());
exports.Hero = Hero;
