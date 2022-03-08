'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;


// EventListener For Check button
document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🏆 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';


        //code for highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


        // When guess is too high
    } else if (guess > secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = '📈 too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game! Try Again!!';

            document.querySelector('.score').textContent = 0;
        }


        // When guess is too low
    } else if (guess < secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = '📉  too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game! Try Again!!';
            document.querySelector('.score').textContent = 0;
        }


    }

});



// EventListener For Again button

document.querySelector('.again').addEventListener('click', function() {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";

    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';

});