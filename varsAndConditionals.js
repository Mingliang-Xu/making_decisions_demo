/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let johnSnowAttack = 25;
let jamieLannisterAttack = 35;
if(johnSnowAttack>jamieLannisterAttack){
    console.log("johnSnowAttack has beter attack than jamieLannisterAttack");
}else if(jamieLannisterAttack>johnSnowAttack){
    console.log("jamieLannisterAttack has better attack than johnSnowAttack");
}else{
    console.log("jamieLannisterAttack has same attack as johnSnowAttack");
}

let johnSnowHealth = 100;
let johnSnowDefense = 0;

if(johnSnowHealth<=jamieLannisterAttack){
    console.log("JS has been slayed");
}else{
    johnSnowHealth = johnSnowHealth-jamieLannisterAttack
    console.log(`JS health is down to ${johnSnowHealth}`)
}

johnSnowDefense += 25;

// second attack from jamie

if(johnSnowHealth <= (jamieLannisterAttack - johnSnowDefense)){
    console.log("JS is dead")
}else{
    johnSnowHealth -= (jamieLannisterAttack - johnSnowDefense)
    console.log(`JS's health is down to ${johnSnowHealth}`)
}

let isDead = false;

//Jamie uses a gun at Jon 3 times as he runs into the forest
// there is  50% chance, per gun usage, that Jon is dead.

for(let i = 1; i<=3; i++){
    isDead = Math.random()>0.5;
    if(isDead === true){
        console.log(`John has died after ${i}rounds`)
        break
    }
}
if(isDead === false){
    console.log("it is a miracle! John is alive after the bombard")
// Jamie wants Jon dead,and ensures it will happen
// he purses jon into the woods to use his fists
while(johnSnowHealth>0){
    console.log("Jamie punches Jon");
    johnSnowHealth -= 5;
}
console.log("okay, jon did not make it. sorry")
}
