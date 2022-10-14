//global variables
let turn = 1;
let player1;

//verify users inputs
function startGame(){
    player1 = document.forms["authentication"]["player1Name"].value;
    player2 = document.forms["authentication"]["player2Name"].value;
    if (player1 == '' || player2 == '') {
        document.getElementById("startGameDiv").innerHTML =
            '<div id="startGameDiv"><button onclick="startGame()" class="startGame" id="startGameBtnId">digite o nome dos jogadore e clique aqui !!!</button></div>'
    }
    else {
        document.getElementById("board").style.visibility = "visible";
        document.getElementById("startGameDiv").innerHTML =
        `<div id="startGameDiv"><class="startGame" id="startGameBtnId">vez do jogador ${player1}</button></div>`;
        runGame();
    }
}

//organizing screen
function runGame(){
    document.getElementById("gameStatus").innerHTML =
        '<p class="title" id="gameStatus">QUE VENÇA O MELHOR !!!</p>';
    document.getElementById("typePlayers").style.visibility = "hidden";
}

//veifying which player's turn it is
function selectSpace(element){
    let i = element.getElementsByTagName("img")[0];
    if (turn % 2 != 0) {
        i.src = "../Assets/space1.jpg";
        document.getElementById("startGameDiv").innerHTML =
        `<div id="startGameDiv"><class="startGame" id="startGameBtnId">vez do jogador ${player2}</button></div>`;
    }
    else {
        i.src = "../Assets/space2.jpg";
        document.getElementById("startGameDiv").innerHTML =
        `<div id="startGameDiv"><class="startGame" id="startGameBtnId">vez do jogador ${player1}</button></div>`;
    }
    turn++;
}

function victory(){
    const victory = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
}

