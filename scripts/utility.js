function hideElementById (elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

// function getRandomAlphabet(){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxz'
//     const alphabets = alphabetString.split('');
//     console.log(alphabets);

//     // get a random index between 0- 25
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber)
//     console.log(index);

//     const alphabet = alphabets[index];
//     console.log(index, alphabet);
//     return alphabet;
// }





function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')
    console.log(alphabets)
    // get a random index between 0-25
     const randomNumber = Math.random()*25;
     const index = Math.round(randomNumber);

     const alphabet = alphabets[index];
     return alphabet;
}