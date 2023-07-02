function init_game() {
    let boardTag = document.getElementById("sudoku");

    let tableTag = document.createElement("table");
    tableTag.id = "board";

    for (let row = 0; row < 3; row++) {
        let trTag = document.createElement("tr");
        trTag.classList.add("board_row");

        if (row == 1) {
            trTag.classList.add("board_row_center")
        }

        for (let col = 0; col < 3; col++) {
            let tdTag = document.createElement("td");
            tdTag.classList.add("box");

            for (let c = 0; c < 9; c++) {
                let cellTag = document.createElement("div");
                cellTag.classList.add('cell');

                cellTag.setAttribute('onclick', 'click_cell(this)')

                tdTag.appendChild(cellTag)
            }

            trTag.appendChild(tdTag);
        }

        tableTag.appendChild(trTag);
    }
    boardTag.appendChild(tableTag);
}

// test

let test = [
    [0, 9, 0, 4, 0, 0, 0, 0, 0],
[0, 0, 0, 6, 0, 0, 0, 5, 0],
[2, 0, 4, 0, 0, 7, 8, 0, 0],
[0, 8, 0, 0, 0, 9, 0, 0, 0],
[3, 0, 9, 7, 0, 0, 0, 0, 6],
[0, 1, 0, 0, 0, 0, 3, 0, 0],
[1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 2, 0, 0, 0, 8],
[7, 0, 3, 0, 0, 4, 2, 0, 0]
];

let s = new Solver(test);