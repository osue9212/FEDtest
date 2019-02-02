"use strict";
// app.ts
exports.__esModule = true;
var characterfactory_1 = require("./characterfactory");
var characterFactory = new characterfactory_1.CharacterFactory();
var goodman = characterFactory.createCharacter({ name: 'Goodman', type: "hero" });
var badman = characterFactory.createCharacter({ name: 'Badman', health: 60, type: "villain" });
goodman.attacked(70);
badman.attacked(70);
