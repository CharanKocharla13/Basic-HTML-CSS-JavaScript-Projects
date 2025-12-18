const myButton = document.getElementById("myButton");
const myInput = document.getElementById("myInput");
const result = document.getElementById("result");

let age;

myButton.onclick = function(){
    age = myInput.value;

    if(age>=100){
        result.textContent = "You are TOO OLD to drive...!";
    }
    else if(age==0){
        result.textContent = "You can't drive.. learn to WALK first!!";
    }
    else if(age>=18 ){
        result.textContent = "You are OLD ENOUGH to drive.";
    }
    else if(age<0){
        result.textContent = "Your age cannot be negative.";
    }
    else{
        result.textContent = "You must be 18+ to have licence...";
    }
}

