const board = document.getElementById("board")
const table = document.createElement("table")
board.appendChild(table)

function boardSize(numOfRows, numOfCells) {
    for (let i = 0; i < numOfRows; i++) {
        const row = document.createElement("tr")
        table.appendChild(row)
        for (let k = 0; k < numOfCells; k++) {
            const cell = document.createElement("td")
            row.appendChild(cell)
        }
    }
}

boardSize(3, 3)
