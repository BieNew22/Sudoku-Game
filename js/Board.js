/**
 * Writer - 안학룡(BieNew22)
 * Role of this file
 *              - display sudoku puzzle
 *              - check user answer : is solve or unresolve
 * Date of latest update - 2023.07.02
 */

class Board {
    constructor() {
        this.table = new Array(9);
        for(let i = 0; i < 9; i++) {
            this.table[i] = new Array(9);
        }

        this.puzzle = null;
    }

    init_game() {
        //after select;
        this.puzzle = new BlankMaker().get_result();

        // after user select sudoku difficulty
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

                    let x = col * 3 + c % 3;
                    let y = row * 3 + parseInt(c / 3);

                    if (this.puzzle[y][x] == 0) {
                        cellTag.setAttribute('onclick', 'click_cell(this)')
                    } else {
                        cellTag.classList.add("fixed");
                        cellTag.innerText = this.puzzle[y][x];
                    }

                    this.table[y][x] = cellTag;

                    tdTag.appendChild(cellTag)
                }

                trTag.appendChild(tdTag);
            }

            tableTag.appendChild(trTag);
        }
        boardTag.appendChild(tableTag);
    }

    check_result() {
        // check : have empty cell?
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                if (this.table[y][x].innerText.length != 1) {
                    alert("fill in all the empth cell plz;;")
                    return;
                }
            }
        }

        // check : col and row and box
        let box = new Array(9);
        let row = new Array(9);
        let col = new Array(9);

        for (let i = 0; i < 9; i++) {
            box[i] = new Set();
            row[i] = new Set();
            col[i] = new Set();
        }

        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                let boxIdx = parseInt(y / 3) * 3 + parseInt(x / 3);
                row[y].add(this.table[y][x].innerText);
                col[x].add(this.table[y][x].innerText);
                box[boxIdx].add(this.table[y][x].innerText);
            }
        }

        for (let i = 0; i < 9; i++) {
            if (row[i].size != 9 || col[i].size != 9 || box[i].size != 9) {
                alert('fail...');
                return;
            }
        }

        alert('success!');
        location.reload();
    }
}