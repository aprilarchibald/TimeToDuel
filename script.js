class Card{
    constructor(name,cost){
        this.name = name;
        this.cost =cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        if( target instanceof Unit ){
            target.resilience -= this.power;
            console.log(`${this.name} targeted ${target.name} and attacked for ${this.power}.  Resilience lowered by ${target.resilience}`)
        } else {
        throw new Error( "Target must be a unit!" );
        }
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude =magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat === "power"){
                target.power += this.magnitude
            } else if (this.stat === "resilience" ){
                target.resilience += this.magnitude
            }
            console.log(`${this.name} was played on ${target.name} to ${this.text}`);
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }   
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)

const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target resilience by 3", "resilience", 3)
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target resilience by 2", "resilience", -2)
const pairProgramming = new Effect("Pair Programming", 3, "increase target power by 2", "power", 2)
console.log('Turn 1')
hardAlgorithm.play(redBeltNinja)
console.log('Turn 2')
unhandledPromiseRejection.play(blackBeltNinja)
console.log('Turn 3')
pairProgramming.play(redBeltNinja)


