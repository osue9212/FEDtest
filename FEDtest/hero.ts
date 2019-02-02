// hero.ts

export class Hero{
   private name: string;
   private health: number = 100;
   constructor(name: string, health: number = 100){
       this.name = name;
       this.health = health;
   }
   attacked(attackValue) {
        if (attackValue > this.health) {
            console.log(`${this.name} is no more.`);
        } else {
        this.health -= attackValue;
            console.log(`Hero attacked: ${attackValue} -- ${this.health}`);
        }
    }
}
