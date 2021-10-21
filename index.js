// Prompt user for their name
let userName = window.prompt(`Please enter your name:`)

// Tally the user score
let userScore = 0;

// Prompt user with trivia questions
for(let i = 0; i < questions.length; i++) {
    let question = questions[i]
    // Store user answer
    let userAnswer = window.prompt(question.text)
    // Compare user answer to correct answer
    if(userAnswer === question.correctAnswer) {
        // If answer is correct add to tally
        userScore = userScore + 10
        // Let user know they answered correctly
        window.alert("Correct!" + "\n" + "Current Score: " + userScore)
    } else {
        window.alert("Incorrect!" + "\n" + "Current Score: " + userScore)
    }
}

// Show score to the user
window.alert(`Your final score is: ` + userScore)

// Get game scores
let serializedGames = localStorage.getItem('games')

// Check for any stored game scores and parse if they exist
let games;
if(serializedGames === null) {
    games = []
} else {
    games = JSON.parse(serializedGames)
}

// Create a game object for storing user's name and score
let game = {
    user: userName,
    score: userScore
}

// Add game object to the games array
games.push(game)

// Serialize the array into a string for storing
serializedGames = JSON.stringify(games)
localStorage.setItem('games', serializedGames)

let gamesArray = JSON.parse(localStorage.getItem(`games`))

// Initialize the high score and associated user
let highScore = gamesArray[0].score;
let highScoreUser = gamesArray[0].user;

// Loop through the storage array to find the high score and associated user
for (let i = 0; i < gamesArray.length; i++) {
    if (highScore < gamesArray[i].score) {
        highScore = gamesArray[i].score
        highScoreUser = gamesArray[i].user
    }
}

// Display the high score and player
window.alert("High Score: " + highScore + "\n" + "High Score Player: " + highScoreUser)

// Compare the current user's score to any existing scores for this user
let currentUserHighScore = userScore;

// Loop through the storage array to find the highest score for the current user playing
for (let i = 0; i < gamesArray.length; i++) {
    if (userName === gamesArray[i].user && currentUserHighScore < gamesArray[i].score) {
        currentUserHighScore = gamesArray[i].score
    }
}

// Display the current user's highest score
window.alert("Hi " + userName + "!" + "\n" + "Your Personal High Score is: " + currentUserHighScore)

// Ask user if they want to play the game again
window.alert("Would you like to play again?")
