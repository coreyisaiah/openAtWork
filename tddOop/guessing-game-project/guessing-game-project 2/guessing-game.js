const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let secretNumber;
let numAttempts = 5;

function randomInRange(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess(num){
    if (num > secretNumber){
        console.log("  Too high, try again...")
        return askGuess()
    }
    if (num < secretNumber){
        console.log("  Too low, try again...")
        return askGuess()
    }
    if (num === secretNumber){
        console.log('   You win!')
        return true
    }
}

function askGuess(){
    rl.question('What do you think my secret number is?? ', (num) => {
        if (!checkGuess(Number(num))){
            return checkGuess()    
        } else {
            rl.close()
        }
    })
}

function askRange(){
    rl.question("Gimme a minimum number... ", (min) =>{
        min = Number(min)

        rl.question("Now, run me a max...  ", (max) =>{
            max = Number(max)

            console.log(`Hmmm, I'm thinking of a number between ${min} and ${max}...`)
            secretNumber = randomInRange(min, max)
            askGuess()
        })
    });
}

askRange()