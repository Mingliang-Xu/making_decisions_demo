

// let namesArr = [7,2,8,7,4,8,13,6,32]
// for(let i = 0; i < namesArr.length; i+=1){
//     namesArr[i] += 1;
//     console.log(namesArr[i]);
// }
// // Devountain Verison of guessMe:
// let guessMe = 54

// while (guessMe < 100) {
//     console.log('----------')
//     if (guessMe % 4 == 0 || guessMe % 5 == 0) {
//         console.log('guessMe is divisible by 4 or 5.  Added 25.')
//         guessMe += 25
//     } else if (guessMe % 3 == 0) {
//         console.log('guessMe is divisible by 3.  Subtracted 27.')
//         guessMe -= 27
//     } else {
//         console.log('Added 3.')
//         guessMe += 3
//     }
//     guessMe += 22
//     console.log(`guessMe is now ${guessMe}.`)
// }
let guessMe = 54

console.log('starting...')
while (guessMe < 100) {
    console.log(`starting a new loop with number ${guessMe}, beacuse it is less than 100`)
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        console.log(`   ${guessMe} is divisible by either 4 or 5`)
        console.log(`   so let's add 25 to it`)
        guessMe += 25
        console.log(`   guessMe is now ${guessMe}`)
        console.log('  ------------------------------------')
    } else if (guessMe % 3 == 0) {
        console.log(`   ${guessMe} is divisible by 3`)
        console.log(`   so let's subtract 27 from it`)
        guessMe -= 27
        console.log(`   guessMe is now ${guessMe}`)
        console.log('  ------------------------------------')
    } else {
        console.log(`   ${guessMe} was not divisible by 3, 4, or 5`)
        console.log(`   so let's add 3 to it`)
        guessMe += 3
        console.log(`   guessMe is now ${guessMe}`)
        console.log('  ------------------------------------')
    }
    console.log('   each loop, we add 22 to guessMe')
    guessMe += 22
    console.log(`   guessMe is now ${guessMe}`)
    console.log('  ------------------------------------')
}
console.log(`${guessMe} is now greater than 100, so we don't loop again. Here is the final value:`)

console.log(guessMe)

