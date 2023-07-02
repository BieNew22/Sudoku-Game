/**
 * Writer - 안학룡(BieNew22)
 * Role of this file
 *              - provide sudoku data
 *              - make sudoku puzzle
 *              - use get_puzzle(sudokuDifficulty) method to get puzzle
 * Date of latest update - 2023.07.02
 */

let selectMode = document.getElementById("input");
let selectNum = document.getElementById("numPad1");

class Seed {
    constructor() {
        this.easy = [
            [
                [2, 6, 3, 1, 4, 8, 9, 5, 7],
                [1, 4, 9, 5, 7, 2, 8, 3, 6],
                [7, 5, 8, 6, 3, 9, 4, 1, 2],
                [8, 2, 5, 7, 6, 1, 3, 4, 9],
                [4, 3, 6, 9, 2, 5, 7, 8, 1],
                [9, 7, 1, 4, 8, 3, 6, 2, 5],
                [5, 8, 7, 3, 1, 6, 2, 9, 4],
                [3, 1, 4, 2, 9, 7, 5, 6, 8],
                [6, 9, 2, 8, 5, 4, 1, 7, 3]
            ], [
                [3, 1, 9, 7, 4, 6, 5, 8, 2],
                [7, 2, 4, 5, 8, 3, 9, 1, 6],
                [6, 5, 8, 9, 1, 2, 4, 7, 3],
                [4, 3, 1, 2, 9, 7, 8, 6, 5],
                [9, 7, 2, 8, 6, 5, 3, 4, 1],
                [8, 6, 5, 4, 3, 1, 7, 2, 9],
                [5, 9, 7, 1, 2, 8, 6, 3, 4],
                [2, 8, 6, 3, 5, 4, 1, 9, 7],
                [1, 4, 3, 6, 7, 9, 2, 5, 8]
            ], [
                [1, 9, 4, 3, 8, 6, 2, 5, 7],
                [3, 7, 6, 4, 5, 2, 8, 9, 1],
                [8, 2, 5, 9, 7, 1, 6, 3, 4],
                [9, 4, 3, 1, 6, 7, 5, 2, 8],
                [5, 6, 7, 2, 4, 8, 9, 1, 3],
                [2, 8, 1, 5, 3, 9, 7, 4, 6],
                [6, 5, 2, 8, 1, 4, 3, 7, 9],
                [7, 1, 9, 6, 2, 3, 4, 8, 5],
                [4, 3, 8, 7, 9, 5, 1, 6, 2]
            ]
        ];

        this.normal = [
            [
                [1, 9, 4, 8, 6, 5, 7, 2, 3],
                [7, 8, 5, 4, 2, 3, 6, 9, 1],
                [3, 2, 6, 1, 9, 7, 8, 4, 5],
                [6, 3, 9, 7, 5, 8, 4, 1, 2],
                [8, 5, 1, 9, 4, 2, 3, 7, 6],
                [2, 4, 7, 3, 1, 6, 9, 5, 8],
                [9, 1, 3, 5, 8, 4, 2, 6, 7],
                [4, 6, 8, 2, 7, 1, 5, 3, 9],
                [5, 7, 2, 6, 3, 9, 1, 8, 4]
            ], [
                [4, 3, 1, 2, 7, 9, 6, 5, 8],
                [6, 2, 5, 8, 3, 1, 9, 7, 4],
                [9, 8, 7, 6, 5, 4, 3, 2, 1],
                [5, 1, 2, 3, 9, 6, 4, 8, 7],
                [8, 7, 9, 1, 4, 2, 5, 3, 6],
                [3, 4, 6, 5, 8, 7, 1, 9, 2],
                [7, 5, 8, 4, 6, 3, 2, 1, 9],
                [2, 9, 4, 7, 1, 5, 8, 6, 3],
                [1, 6, 3, 9, 2, 8, 7, 4, 5]
            ]
        ];

        this.hard = [
            [
                [6, 9, 7, 8, 4, 2, 5, 3, 1],
                [5, 1, 4, 3, 6, 7, 8, 9, 2],
                [8, 2, 3, 5, 9, 1, 4, 7, 6],
                [7, 3, 2, 1, 8, 9, 6, 4, 5],
                [4, 6, 8, 2, 7, 5, 3, 1, 9],
                [9, 5, 1, 6, 3, 4, 2, 8, 7],
                [2, 4, 9, 7, 5, 8, 1, 6, 3],
                [3, 8, 5, 9, 1, 6, 7, 2, 4],
                [1, 7, 6, 4, 2, 3, 9, 5, 8]
            ], [
                [8, 2, 9, 4, 5, 3, 6, 1, 7],
                [5, 3, 7, 8, 1, 6, 9, 4, 2],
                [6, 1, 4, 2, 9, 7, 8, 3, 5],
                [1, 9, 3, 7, 4, 8, 5, 2, 6],
                [7, 4, 8, 5, 6, 2, 3, 9, 1],
                [2, 6, 5, 9, 3, 1, 4, 7, 8],
                [3, 5, 6, 1, 2, 4, 7, 8, 9],
                [9, 7, 2, 3, 8, 5, 1, 6, 4],
                [4, 8, 1, 6, 7, 9, 2, 5, 3]
            ], [
                [1, 3, 7, 6, 9, 5, 4, 8, 2],
                [8, 9, 5, 2, 7, 4, 6, 3, 1],
                [6, 2, 4, 8, 1, 3, 7, 5, 9],
                [3, 4, 9, 7, 8, 1, 5, 2, 6],
                [7, 6, 2, 5, 4, 9, 8, 1, 3],
                [5, 1, 8, 3, 6, 2, 9, 7, 4],
                [9, 5, 1, 4, 2, 8, 3, 6, 7],
                [2, 7, 3, 9, 5, 6, 1, 4, 8],
                [4, 8, 6, 1, 3, 7, 2, 9, 5]
            ]
        ];
    }

    get_puzzle(mode) {
        let sudokuDifficulty;
        if (mode.innerText == 'easy') {
            sudokuDifficulty = this.easy;
        } else if (mode.innerText == 'normal') {
            sudokuDifficulty = this.normal;
        } else {
            sudokuDifficulty = this.hard;
        }

        // deep copy : array.slice();
        let board = sudokuDifficulty[Math.floor(Math.random() * sudokuDifficulty.length)];

        // shuffle board
        for (let i = 0; i < Math.floor(Math.random() * 3); i++) {
            this.swap_vertical(board);
            this.swap_horizontal(board);
        }

        for (let i = 0; i < 2; i++) {
            this.rotate_data(board);
        }

        for (let i = 0; i < Math.floor(Math.random() * 4); i++) {
            this.axis_symmetry(board);
        }

        for (let i = 0; i < Math.floor(Math.random() * 4); i++) {
            this.number_swap(board);
        }

        return board;
    }


    //=== generate new sudoku methods ===//
    swap_vertical(data) {
        let box = Math.floor(Math.random() * 3);

        let sLine1 = Math.floor(Math.random() * 3);
        let sLine2;
        do {
            sLine2 = Math.floor(Math.random() * 3);
        } while (sLine1 != sLine2);

        for (let i = 0; i < 9; i++) {
            let tmp = data[i][box * 3 + sLine1];
            data[i][box * 3 + sLine1] = data[i][box * 3 + sLine2];
            data[i][box * 3 + sLine2] = tmp; 
        }
    }

    swap_horizontal(data) {
        let box = Math.floor(Math.random() * 3);

        let sLine1 = Math.floor(Math.random() * 3);
        let sLine2;
        do {
            sLine2 = Math.floor(Math.random() * 3);
        } while (sLine1 != sLine2);

        for (let i = 0; i < 9; i++) {
            let tmp = data[box * 3 + sLine1][i];
            data[box * 3 + sLine1][i] = data[box * 3 + sLine2][i];
            data[box * 3 + sLine2][i] = tmp;
        }
    }

    rotate_data(data) {
        let deg = Math.floor(Math.random() *3) + 1
        let tmp = new Array(9);
        for (let i = 0; i < 9; i++) {
            tmp[i] = new Array(9);
        }

        for (let c = 0; c < deg; c++) {
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    tmp[i][j] = data[9 - j - 1][i];
                }
            }
            data = tmp;
        }
    }

    axis_symmetry(data) {
        // type : 0 -> x-axis, 1 -> y-axis, 2 -> y=x
        let type = Math.floor(Math.random(0 * 3));

        if (type == 0) {
            // x-axis
            for (let y = 0; y < 9; y++) {
                for (let x = 0; x < 4; x++) {
                    let tmp = data[y][x];
                    data[y][x] = data[y][8 - x];
                    data[y][8 - x] = tmp;
                }
            }
        } else if (type == 1) {
            // y-axis
            for (let y = 0; y < 4; y++) {
                for (let x = 0; x < 9; x++) {
                    let tmp = data[y][x];
                    data[y][x] = data[8 - y][x];
                    data[8 - y][x] = tmp;
                }
            }
        } else {
            for (let y = 0; y < 9; y++) {
                for (let x = 0; x < y; x++) {
                    let tmp = data[y][x];
                    data[y][x] = data[x][y];
                    data[x][y] = tmp;
                }
            }
        }
    }

    number_swap(data) {
        let num1 = Math.floor(Math.random() * 9) + 1;
        let num2;
        do {
            num2 = Math.floor(Math.random() * 9) + 1;
        } while (num1 != num2);

        let finder = new Array()

        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                if (data[y][x] == num1) {
                    finder.push([y, x]);
                    data[y][x] = num2;
                }
            }
        }

        finder.forEach((yx) => {
            data[yx[0]][yx[1]] = num1;
        })

    }

}