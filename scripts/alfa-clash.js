// function play(){
//     // Stap-1 hide the home Screen
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden');

//     // Show the play ground
//     const playgroundScetion = document.getElementById('play-ground')
//     playgroundScetion.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event){
    const playerpressed = event.key;
    console.log('player pressed', playerpressed)

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerpressed, expectedAlphabet);

    // check matched or not
    if(playerpressed === expectedAlphabet){
        console.log('you get a point');
        // update score:
        //  1. get the current score
          const currentScoreElement = document.getElementById('current-score');
          const currentScoreText = currentScoreElement.innerText;
          const currentScore = parseInt(currentScoreText)
          console.log(currentScore);
        // 2. increase the score by 1
        const newScore = currentScore + 1;
        //  3. show the updated score
        currentScoreElement.innerText = newScore;
        // start a new round
        console.log('you have pressed correctly', expectedAlphabet)
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life')
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    const alphabet = getRandomAlphabet()
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    // set background color 
    setBackgroundColorById(alphabet);
} 

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}
