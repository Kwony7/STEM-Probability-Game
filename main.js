var outcomes = [-1, -1, -1, -1, -1, -1, -1, 0, 0, 1];
var currState = 0;
var count = 0;
var output = document.getElementById("output");
var rollsLeft = document.getElementById("rollsLeft");
var rollOut = document.getElementById("rollOut");

function updateOut(){
    if(currState == 0){
        output.innerHTML = "Alive";
    }else{
        output.innerHTML = "Dead";
    }
}

function gameOver(){
    if(currState == 0){
        output.innerHTML = "You have survived";
    }else{
        output.innerHTML = "You did not survive";
    }
}

function  roll(){
    if(count >= 5){
        alert("You have no more rolls left");
        gameOver();
        return;
    }
    var random = Math.floor(Math.random() * 10);
    
    if(outcomes[random] == -1){
        currState = -1;
        rollOut.innerHTML = "Death";
    }else if(outcomes[random] == 1){
        currState = 0;
        rollOut.innerHTML = "Revive";
    }else if(outcomes[random] == 0){
        rollOut.innerHTML = "Stay";
    }

    updateOut();

    count++;

    rollsLeft.innerHTML = 5 - count;
}

