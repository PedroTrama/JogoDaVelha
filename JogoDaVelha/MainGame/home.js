//global variables
let turn = 1;       //turn number                   
let victory1 = 0;   //victory condition for player 1  
let victory2 = 0;   //victory condition for player 2

//collecting and verifying users inputs
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

//organizing screen for the running game
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
        victory();
    }
    else {
        i.src = "../Assets/space2.jpg";
        document.getElementById("startGameDiv").innerHTML =
        `<div id="startGameDiv"><class="startGame" id="startGameBtnId">vez do jogador ${player1}</button></div>`;
        victory();
    }
    turn++;
}

//if player 1 wins
function player1Wins(){
    victory1 = 1;
    document.getElementById("gameStatus").innerHTML =
    `<p class="title" id="gameStatus">Vitória de ${player1}</p>`;
    document.getElementById("startGameDiv").innerHTML =
    `<div id="startGameDiv"><class="startGame" id="startGameBtnId">fim do jogo</button></div>`;
    document.getElementById("board").innerHTML =
    `<h2><img src="../Assets/player1.png" alt="player1" class="player1"></h2>`;
}

//if player 2 wins
function player2Wins(){
    victory2 = 1;
    document.getElementById("gameStatus").innerHTML =
    `<p class="title" id="gameStatus">Vitória de ${player2}</p>`;
    document.getElementById("startGameDiv").innerHTML =
    `<div id="startGameDiv"><class="startGame" id="startGameBtnId">fim do jogo</button></div>`;
    document.getElementById("board").innerHTML =
    `<h2><img src="../Assets/player2.png" alt="player2" class="player2"></h2>`;
}

//if no players win
function tie(){
    if((turn == 9) && (victory1 == 0) && (victory2 == 0)){
        document.getElementById("gameStatus").innerHTML =
        `<p class="title" id="gameStatus">VELHA !!!</p>`;
        document.getElementById("startGameDiv").innerHTML =
        `<div id="startGameDiv"><class="startGame" id="startGameBtnId">fim do jogo</button></div>`;
    }
    else if(victory1 == 1){
        player1Wins();
    }
    else if(victory2 == 1){
        player2Wins();
    }
}            

//verify if a player has placed three adjacent pieces
function victory(){
    tie();
    if(turn <= 9){
        var space1, space2, space3, space4, space5, space6, space7, space8, blank;
        space1 = document.getElementById("space1tile").src;
        space2 = document.getElementById("space2tile").src;
        space3 = document.getElementById("space3tile").src;
        space4 = document.getElementById("space4tile").src;
        space5 = document.getElementById("space5tile").src;
        space6 = document.getElementById("space6tile").src;
        space7 = document.getElementById("space7tile").src;
        space8 = document.getElementById("space8tile").src;
        space9 = document.getElementById("space9tile").src;
        blank = document.getElementById("blank").src; 

        if(space1 == space2 && space2 == space3 && space1 != blank && space2 != blank && space3 != blank){
            if (turn % 2 != 0) {
                player1Wins();
            }
            else{
                player2Wins(); 
            }
        }
        else if(space4 == space5 && space5 == space6 && space4 != blank && space5 != blank && space6 != blank){
            if (turn % 2 != 0) {
                player1Wins();
            }
            else{
                player2Wins();   
            }
        }
        else if(space7 == space8 && space8 == space9 && space7 != blank && space8 != blank && space9 != blank){
            if (turn % 2 != 0) {
                player1Wins();
            }
            else{
                player2Wins();
            }
        }
        else if(space1 == space4 && space4 == space7 && space1 != blank && space4 != blank && space7 != blank){
            if (turn % 2 != 0) {
                player1Wins();
            }
            else{
                player2Wins();              
            }
        }
        else if(space2 == space5 && space5 == space8 && space2 != blank && space5 != blank && space8 != blank){
            if (turn % 2 != 0) {
                player1Wins();
            }
            else{
                player2Wins();             
            }
        }
        else if(space3 == space6 && space6 == space9 && space3 != blank && space6 != blank && space9 != blank){
            if (turn % 2 != 0) {
                player1Wins();
            }
            else{
                player2Wins();               
            }
        }
        else if(space1 == space5 && space5 == space9 && space1 != blank && space5 != blank && space9 != blank){
            if (turn % 2 != 0) {
                player1Wins();
            }
            else{
                player2Wins();              
            }
        }
        else if(space3 == space5 && space5 == space7 && space3 != blank && space5 != blank && space7 != blank){
            if (turn % 2 != 0) {
                player1Wins();
            }
            else{
                player2Wins();              
            }
        }
    }   
}