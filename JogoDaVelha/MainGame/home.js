var gameRunning = false;
var playerTurn = 'x';
var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

document.getElementById("player1").innerHTML = player1;
document.getElementById("player2").innerHTML = player2;

//digita o nome do jogador 1
//digita o nome do jogador 2
//gameRunning = true
//"digite o nome dos jogadores" => turno de "X"
//enquanto gameRunnnig = true
//jogador X escolhe a casa
//"turno de Y"
//jogador Y escolhe a casa
//quando uma das condições de vitória bater: gameRunning = false
//"turno de X" => vitória de "X"
//clicar em recomeçar recomeça tudo do zero  

const victory = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



/*const selectSpace = (space, id) => {
    if (currentSpace(space) && gameRunning) {
        document.getElementById(space2).setAttribute("src", "../Assets/space1.jpg");
        mudarJogador
    }
}

for(var i=1; i<10; i++){
function selectSpace(space2){
document.getElementById(space2).setAttribute("src", "../Assets/space1.jpg");
}
}*/
