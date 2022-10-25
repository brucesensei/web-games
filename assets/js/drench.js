var idArray = [];
var territoryArray = [];
var toEvaluateArray = [];
var sideWidth = 14
var cellCount = sideWidth * sideWidth

document.body.onload = createIdArray(sideWidth);
document.body.onload = addElement(cellCount);
var colorButtons = document.getElementsByClassName("r-color-buttons")
for (var i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener("click", function() {
        var newColor = this.id;
        var StartingCell = document.getElementById('r-grid-container').firstChild;
        var color = StartingCell.style.backgroundColor;
        var idString = StartingCell.id;
        toEvaluateArray.push(idString);
        selectTeritory(color);
        console.log(newColor)
        changeColor(newColor);
        territoryArray = []
    });
};

function changeColor(newColor) {
    for (var i = 0; i < territoryArray.length; i++) {
        var element = document.getElementById(territoryArray[i]);
        element.style.backgroundColor = newColor;
    }

}

function selectTeritory(color) {
    while (toEvaluateArray.length !== 0) {
        var cellString = toEvaluateArray[0];    
        var splitString = cellString.split("g");
        var x = splitString[1];
        var y = splitString[2];
        var top = "g" + (Number(x) - 1) + "g" + y;
        getTarget(top, color);
        var right = "g" + x + "g" + (Number(y) + 1);
        getTarget(right, color);
        var down = "g" + (Number(x) + 1) + "g" + y;
        getTarget(down, color);
        var left = "g" + x + "g" + (Number(y) - 1);
        getTarget(left, color);
        territoryArray.push(cellString);
        let territorySet = new Set(territoryArray);
        territoryArray = Array.from(territorySet);
        for (var i = 0; i < territoryArray.length; i++) {
            var index = toEvaluateArray.indexOf(territoryArray[i]);
            if ( index !== -1) {
                toEvaluateArray.splice(index, 1);
            };
        };
        console.log(territoryArray, 'territory array');
        console.log(toEvaluateArray, 'to evaluate array');
    };
};

function getTarget(target, color) {
    if (document.getElementById(target) !== null) {
        if (document.getElementById(target).style.backgroundColor == color) {
            toEvaluateArray.push(target);
            let mySet = new Set(toEvaluateArray);
            toEvaluateArray = Array.from(mySet);
        };
    };
}; 

function createIdArray(sideWidth) {
    for (var i = 0; i < sideWidth; i++)
        for (var j = 0; j < sideWidth; j++) {
            var item = 'g' + i + 'g' + j;
            idArray.push(item);
        };
};

function addElement(cellCount) {
    var colors = ['green', 'blue', 'purple', 'white', 'red', 'orange']
    for (var i = 0; i < cellCount; i++) {
        var newDiv = document.createElement("div");
        newDiv.className="r-box";
        newDiv.setAttribute("id", idArray[i])
        var num = Math.floor(Math.random() * 6);
        newDiv.style.backgroundColor = colors[num];
        document.getElementById("r-grid-container").appendChild(newDiv);
    };
};
