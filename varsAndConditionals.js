/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let johnSnowAttack = 25;
let jamieLannisterAttack = 35;
if(johnSnowAttack>jamieLannisterAttack){
    console,console.log("johnSnowAttack has beter attack than jamieLannisterAttack");
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
if(johnSnowHealth<=(jamieLannisterAttack-johnSnowDefense)){
    console.log("JS is dead")
}else{
    johnSnowHealth -= (jamieLannisterAttack - johnSnowDefense)
    console.log(`JS's health is down to ${johnSnowHealth}`)
}