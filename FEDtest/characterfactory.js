"use strict";
// characterfactory.ts
exports.__esModule = true;
var hero_1 = require("./hero");
var villain_1 = require("./villain");
var CharacterFactory = /** @class */ (function () {
    function CharacterFactory() {
    }
    CharacterFactory.prototype.createCharacter = function (characterOptions) {
        if (characterOptions.type === "hero") {
            var hero = new hero_1.Hero(characterOptions.name, characterOptions.health);
            return hero;
        }
        else if (characterOptions.type === "villain") {
            var villain = new villain_1.Villain(characterOptions.name, characterOptions.health);
            return villain;
        }
        else {
            throw new Error('Please choose Hero or Villain.');
        }
    };
    return CharacterFactory;
}());
exports.CharacterFactory = CharacterFactory;
