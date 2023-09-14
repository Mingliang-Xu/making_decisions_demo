/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = [
    "poke ball", "poke ball", "potion", "beef jerky", "running shoes"
];
let pokemon = [];

backpack.push("oreos");
backpack.push("oreos");
console.log("after buying oreos, this is our backpack: ")
console.log(pokemon);

backpack.push("pokedex");
pokemon.push("pikachu");

console.log("after meeting professor oak, our backpack and pokemon are: ")
console.log(backpack);
console.log(pokemon);

for(let i = 0; i < 4; i++){
    pokemon.push("pidgey");
}
console.log("after the pidgeys, our pokemon are now: ");
console.log(pokemon);

backpack.splice(3, 4,);
console.log("after the binge and the giveaway, backpak is now: ");
console.log(backpack);

let newPokemon = "charizard";
pokemon.push(newPokemon);
console.log("after catching charizard, our pokemon are now: ")
console.log(pokemon);

console.log("here is my pikachu!");
let cutestPokemon = pokemon[0];
console.log(cutestPokemon);

let clonePidgey = pokemon.slice(1,4+1);
console.log("here are your cloned pidgeys:");
console.log(clonePidgey);
console.log(pokemon);
backpack.unshift("jynx statute");
console.log("backpack after adding status: ")
console.log(backpack);





