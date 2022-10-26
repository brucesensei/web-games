

var currentCount = 0;
var playerOneScore = 0;
var playerTwoScore = 0;

function rollDice() {
    var winnerOneIcon = document.getElementById("d-winner-image-one");
    var winnerTwoIcon = document.getElementById("d-winner-image-two");
    winnerOneIcon.style.visibility = "hidden";
    winnerTwoIcon.style.visibility = "hidden";
    var p1Roll = getRandom();
    var p2Roll = getRandom();
    var p1DieImage = "/web-games/assets/images/dice-images/" + p1Roll + ".png";
    var p2DieImage = "/web-games/assets/images/dice-images/" + p2Roll + ".png";
    document.getElementById("d-image-one-die").src = p1DieImage;
    document.getElementById("d-image-two-die").src = p2DieImage;
    var winner = chooseWinner(p1Roll, p2Roll);
    if (winner === "p1") {
        playerOneScore++;
        winnerOneIcon.style.visibility = "visible";
    }
    if (winner === "p2") {
        playerTwoScore++;
        winnerTwoIcon.style.visibility = "visible";
    }    
    currentCount++;
    document.getElementById("d-round-counter").innerHTML = currentCount;
    document.getElementById("d-player-one-score").innerHTML = playerOneScore;
    document.getElementById("d-player-two-score").innerHTML = playerTwoScore;
};

function resetAll() {
    currentCount = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    document.getElementById("d-round-counter").innerHTML = currentCount;
    document.getElementById("d-player-one-score").innerHTML = playerOneScore;
    document.getElementById("d-player-two-score").innerHTML = playerTwoScore;
    var winnerOneIcon = document.getElementById("d-winner-image-one");
    var winnerTwoIcon = document.getElementById("d-winner-image-two");
    winnerOneIcon.style.visibility = "hidden";
    winnerTwoIcon.style.visibility = "hidden";
};


function getRandom() {
    return Math.floor(Math.random() * 6) + 1;
};



function chooseWinner(player1, player2) {
    if (player1 > player2) {
        return "p1";
    } else if (player1 < player2) {
        return "p2";
    } else {
        return false;
    }
};

