function solve(playerMovesArray = []) {
    let dashboard = [
        [false, false, false],

        [false, false, false],

        [false, false, false]];

    let winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [5, 7, 8]
    ]

    let playerMoves = [];

    let xPlayer = 'X';
    let oPlayer = 'O';

    let xPlayerTurn = true;
    let posableMoves = 0;

    playerMovesArray.forEach((el) => {
        playerMoves.push(el);
    })

    for (let i = 0; i < playerMovesArray.length; i++) {
        let playerPosition = playerMoves[i].split(' ');

        if (dashboard[playerPosition[0]][playerPosition[1]] != false) {
            console.log("This place is already taken. Please choose another!");
        } else if (posableMoves == 9) {
            console.log("The game ended! Nobody wins :(");
        } else {
            dashboard[playerPosition[0]][playerPosition[1]] = nextPlayer();
            checkWinner(dashboard[playerPosition[0]][playerPosition[1]]);
            posableMoves++;
        }
    }

    function checkWinner(player) {

        let winX = [
            [[player, player, player],
            [false, false, false],
            [false, false, false]],

            [[false, false, false],
            [player, player, player],
            [false, false, false]],

            [[false, false, false],
            [false, false, false],
            [player, player, player]]
        ]

        let isYWin = 0;

        let winY = [


            [[player, false, false],
            [player, false, false],
            [player, false, false]],

            [[false, player, false],
            [false, player, false],
            [false, player, false]],

            [[false, false, player],
            [false, false, player],
            [false, false, player]]

        ]

        for (let i = 0; i < winX.length; i++) {
            if (JSON.stringify(dashboard[i]) == JSON.stringify(winX[i][i])) {
                console.log('WinX');
            }
        }

        for (let i = 0; i < winY.length; i++) {
            for (let j = 0; j < winY[i].length; j++) {
                //console.log(winY[i][j]);
                //console.log(dashboard[i][j]);
                isYWin++;
                if (isYWin == 3) {
                    if (dashboard[i][j][i] == winY[i][j][i]) {
                        console.log('WinY');
                    }
                    isYWin = 0;
                }
            }
        }
    }

    function nextPlayer() {
        if (xPlayerTurn == true) {
            xPlayerTurn = false;
            return xPlayer;
        } else {
            xPlayerTurn = true;
            return oPlayer
        }
    }

    console.table(dashboard)

}
solve([
    '0 0',
    '1 1',
    '1 0',
    '1 2',
    '2 0'
]);
//solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
/*
solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);
    */

