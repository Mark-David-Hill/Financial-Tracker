const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function addLetter(letter,row,item) {
    board[row].splice(item,1,letter)
}

// addLetter('X',0,2)
// addLetter('O',2,0)

function getLines() {
    allLines = [
        board[0], board[1], board[2],
    ]
    return(allLines);
}

function checkForWin() {
    
}

function updateBoard() {

}

