/** 
 * Get the initial value for currentWordStatus with underscores based on wordToGuess
 * 
 * @param wordToGuess Word to guess
 * 
 * @returns Initial value for currentWordStatus
 * 
 * This function must return a string with the same length as wordToGuess.
 * If a character in wordToGuess is a letter, the corresponding character
 * in the return value must be an underscore. If a character in wordToGuess
 * is a space, the corresponding character in the return value must be a space.
 */
function getInitialCurrentWord(wordToGuess: string): string {
    let temp = ""
    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] !== " ") {
            temp = temp + "_"
        }
        else if (wordToGuess[i] === " ") {
            temp = temp + " "
        }
    }

    return temp; // Placeholder, remove this line once you added your code
}

/**
 * Handles a guess from a user
 * 
 * @param key Key that the user guessed
 * @param wordToGuess Word to guess
 * @param currentWordStatus Current word status
 * 
 * @returns New value for currentWordStatus
 * 
 * This function must return a new value for currentWordStatus based on the
 * key that the user guessed. If the key is in wordToGuess, the corresponding
 * characters in currentWordStatus must be revealed.
 */
function guessKey(key: string, wordToGuess: string, currentWordStatus: string): string {
    let temp = ""
    for (let i = 0; i < wordToGuess.length; i++) {
        if (key === wordToGuess[i]) {
            temp += wordToGuess[i]
        }
        else {
            temp += currentWordStatus[i]
        }
    }

    return temp; // Placeholder, remove this line once you added your code
}

/**
 * Draws the result text
 * 
 * @param win False if the user has reached 10 wrong guesses, otherwise true
 * 
 * Draws the result text on the screen. If the user has lost (10 wrong guesses),
 * the text must be "Game Over" in red.
 * 
 * If the user has guessed the word correctly, the text must be:
 * 
 * * "No wrong guesses!" if number of wrong guesses is zero.
 * * "One wrong guess!" if number of wrong guesses is one.
 * * "n wrong guesses" otherwise ("n" is number of wrong guesses).
 */
function drawResult(win: boolean, wrongGuesses: number) {
    textSize(65);
    textFont(font)
    textAlign(CENTER, CENTER)
    if (win === true) {
        fill("green")
    }
    if (win === false) {
        fill("red")
    }
    if (win === true && wrongGuesses === 0) {
        text("No wrong guesses!", width / 2, height / 2)
    }
    else if (win === true && wrongGuesses === 1) {
        text("One wrong guess!", width / 2, height / 2)
    }
    else if (win === true && wrongGuesses >= 2) {
        text(`${wrongGuesses}wrong guesses`, width / 2, height / 2)
    }
    else if (win === false) {
        text(`Game Over`, width / 2, height / 2)
    }
}
