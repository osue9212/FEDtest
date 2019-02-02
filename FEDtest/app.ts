// app.ts

import { CharacterFactory } from './characterfactory';

const characterFactory = new CharacterFactory();
const goodman = characterFactory.createCharacter({name: 'Goodman', type: "hero"});
const badman = characterFactory.createCharacter({name: 'Badman', health: 60, type: "villain"});

goodman.attacked(70);
badman.attacked(70);