//verificando entrada dos usuários
function startGame(){
    player1 = document.forms["authentication"]["player1Name"].value;
    player2 = document.forms["authentication"]["player2Name"].value;
    if (player1 == '' || player2 == '') {
        document.getElementById("startGameDiv").innerHTML =
        '<div id="startGameDiv"><button onclick="startGame()" class="startGame" id="startGameBtnId">digite o nome dos jogadore e clique aqui !!!</button></div>'
    }
    else{
        runGame();
    }
}

function runGame(){
    document.getElementById("gameStatus").innerHTML = 
    '<p class="title" id="gameStatus">QUE VENÇA O MELHOR !!!</p>';
    document.getElementById("typePlayers").style.visibility = "hidden";
    document.getElementById("startGameDiv").innerHTML = 
    '<div id="startGameDiv"><class="startGame" id="startGameBtnId">vez do player1</button></div>';
}