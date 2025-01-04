// function play(){
//     // Stap-1 hide the home Screen
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden');

//     // Show the play ground
//     const playgroundScetion = document.getElementById('play-ground')
//     playgroundScetion.classList.remove('hidden')
// }

function continueGame(){
    const alphabet = getRandomAlphabet()
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;
} 

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}
