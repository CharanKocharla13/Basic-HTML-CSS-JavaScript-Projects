// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = Number(window.prompt(`Guess a Number Between ${minNum} and ${maxNum}`));
   
    if(isNaN(guess)){
        window.alert("Please enter a valid Number");
    }

    else if(guess < minNum || guess > maxNum){
        window.alert("Please Enter A Valid Number");
    }

    else{
        attempts++;
        if(guess < answer){
            window.alert("Too Low! Try Again");
        }
        else if(guess > answer){
            window.alert("Too High! Try Again");    
        }
        else{
            window.alert(`CONGRATULATIONS! You've guessed the number ${answer} in ${attempts} attempts.`);
            running = false;
        }
    }
}
