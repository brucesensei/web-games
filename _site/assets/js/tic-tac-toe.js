var currentMove = "❌"
var cells = document.getElementsByClassName("t-cells");


for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        if (this.innerHTML == '') {
            this.innerHTML = currentMove;
            outcome();
            if (currentMove == "❌") {
                currentMove = "⭕";
                document.getElementById("t-player-move").innerHTML = currentMove;
                } else {
                currentMove = "❌";
                document.getElementById("t-player-move").innerHTML = currentMove;
            }; 
        };
    });
};


function outcome () {
    var arr = []
    for (var i = 0; i < cells.length; i++) {
        arr.push(cells[i].innerHTML);
    };
    if (arr[0] == arr[1] && arr[0] == arr[2] && arr[0] == currentMove || 
        arr[3] == arr[4] && arr[3] == arr[5] && arr[3] == currentMove || 
        arr[6] == arr[7] && arr[6] == arr[8] && arr[6] == currentMove || 
        arr[0] == arr[3] && arr[0] == arr[6] && arr[0] == currentMove || 
        arr[1] == arr[4] && arr[1] == arr[7] && arr[1] == currentMove || 
        arr[2] == arr[5] && arr[2] == arr[8] && arr[2] == currentMove || 
        arr[0] == arr[4] && arr[0] == arr[8] && arr[0] == currentMove || 
        arr[2] == arr[4] && arr[2] == arr[6] && arr[2] == currentMove ) {
            document.getElementById('t-information').innerHTML = 'winner: ' + currentMove;
            for (var i = 0; i < cells.length; i++) {
                if (cells[i].innerHTML == '') {
                    cells[i].style.color = 'blue';
                    cells[i].innerHTML = ".";
                };

            };
    };
};
