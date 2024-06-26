function generateRandomWord() {
    const fruits = ['apple', 'orange', 'cherry'];

    // Randomize a number between 0-3 (not including 3)
    const randomIndex = Math.floor(Math.random() * fruits.length);
    const randomWord = fruits[randomIndex];
    const pElement = document.getElementById('randomWord')
    pElement.textContent = randomWord;
}