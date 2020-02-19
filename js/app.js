// Declaring variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
let missed = 0;

// Declaring an array of phrases
const phrases =  [
    "Thats the way the cookie crumbles",
    "Go back to the drawing board",
    "Call it a day",
    "Beat around the bush",
    "Its not rocket science"
]

// Return a random phrase from an array
const getRandomPhraseAsArray = arr => {
    let randomNumber = Math.floor((Math.random() * arr.length));
    return arr[randomNumber].split('');
}

// Add each character of the random phrase to the DOM
const addPhraseToDisplay = arr => {
    const phraseUL = document.querySelector('#phrase ul');
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        phraseUL.appendChild(li);
        if (li.textContent !== ' ') {
            li.classList.add('letter');
        }
    }
}

// Check if a letter is in the phrase
// const checkLetter = button => {
//     const li = document.getElementsByTagName('li');
//     let match = null;
//     for (let i = 0; i < li.length; i++) {
//         if (button.textContent === li[i].textContent) {
//             li[i].classList.add('show');
//             match = button.textContent
//         }
//     }
//     return match;
// }

// Listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

// Listen for the onscreen keyboard to be clicked
// qwerty.addEventListener('click', e => {
//     if (e.target.tagName === 'BUTTON') {
//         e.target.classList.add('chosen');
//         let chosenLetter = checkLetter(e.target.textContent);
//         console.log(chosenLetter);
//     }
// });

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

