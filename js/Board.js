/**
 * Writer - 안학룡(BieNew22)
 * Role of this file
 *              - display sudoku puzzle
 * Date of latest update - 2023.07.02
 */

class Board {
    constructor() {
        this.table = new Array(9);
        for (let i = 0; i < 9; i++) {
            this.table[i] = new Array(9);
        } 
    }

    init_game() {
        // user select sudoku difficulty
    }
}