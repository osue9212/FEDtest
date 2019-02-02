// characterfactory.ts

import {Hero} from './hero';
import {Villain} from './villain';

export class CharacterFactory {
    createCharacter(type: Object): any;
    createCharacter(type: 'hero'): Hero;
    createCharacter(type: 'villain'): Villain;

    public createCharacter(characterOptions:any): Hero | Villain {
        if (characterOptions.type === "hero"){
            const hero = new Hero(characterOptions.name, characterOptions.health);
            return hero;
        }
        else if (characterOptions.type === "villain"){
            const villain = new Villain(characterOptions.name, characterOptions.health);
            return villain;
        }
        else{
            throw new Error('Please choose Hero or Villain.');
        }
    }
}