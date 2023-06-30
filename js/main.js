function init_game() {
    let board = document.getElementById("sudoku");

    let table = document.createElement("table");
    table.id = "board";

    for (let row = 0; row < 3; row++) {
        let tr = document.createElement("tr");
        tr.classList.add("board_row");

        if (row == 1) {
            tr.classList.add("board_row_center")
        }

        for (let col = 0; col < 3; col++) {
            let td = document.createElement("td");
            td.classList.add("box");

            for (let c = 0; c < 9; c++) {
                let cell = document.createElement("div");
                cell.classList.add('cell');

                cell.setAttribute('onclick', 'click_cell(this)')

                td.appendChild(cell)
            }

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
    board.appendChild(table)
}

init_game();