let secretNumber = 12
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


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
        if (!checkGuess(Number(num)))
            return checkGuess()
        else
        rl.close();
    })
}

askGuess()