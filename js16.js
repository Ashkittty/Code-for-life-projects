class AnimeCharacter{
constructor(name,homeTown,power,health,specialAttack,level){
    this.name = name;
    this.homeTown = homeTown;
    this.power = power;
    this.health = health;
    this.specialAttack = specialAttack;
    this.level = level
}      
dodge(opponet, attack){
    console.log(`${this.name} dodged ${opponet}s ${attack}`)
} bunnyjump(opponent){
    opponent.health -= 20;
    console.log(`Cooky did a bunnyjump! ${opponent.name}: **** ${opponent.name}'s HEALTH: ${opponent.health}% ****`);
}
bunnykick(opponent){
    opponent.health -= 10;
    console.log(`Cooky did a bunny kick! **** ${opponent.name}'s HEALTH: ${opponent.health}% ****`);
}
}

powerup();{
    if(this.level >=96){
        console.log(`${this.name} power levels full! special Available`);
    }else{
    this.level +=4;
console.log(`${this.name} power level is now at ${this.level}%`);

}
}
special();{
    if(this.level == 100){
        this.level - 40;
        console.log(`${this.name} has unleashed ${this.specialAttack}`);
    }else{
        console.log(`${this.name} can't do that right now, your power level is at ${this.level}%`);
    }
}

let cooky = new AnimeCharacter("Cooky","South Korea","attack","happieness",100,100,"Bunny");
console.log(cooky.name);
cooky.dodge();
cooky.powerUp();
cooky.special();

