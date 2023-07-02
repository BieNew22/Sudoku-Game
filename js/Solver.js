/**
 * Writer - 안학룡(BieNew22)
 * Role of this file
 *              - solve sudoku puzzle
 *              - use get_result() to get answered puzzle
 *              - use backtracking to find answer
 * Date of latest update - 2023.07.02
 */

class Solver {
    constructor() {
        this.board = null;
        
        this.rows = new Array(9);
        this.cols = new Array(9);
        this.boxes = new Array(9);

        // init area
        for (let i = 0; i < 9; i++) {
            this.rows[i] = new Set();
            this.cols[i] = new Set();
            this.boxes[i] = new Set();
        }
    }

    set_data(data) {
        this.board = data.map(v => v.slice());

        // remove all old data
        for (let i = 0; i < 9; i++) {
            this.rows[i].clear();
            this.cols[i].clear();
            this.boxes[i].clear();
        }

        // add each area has been filled number
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                if (this.board[y][x] == 0) {
                    continue;
                }
                
                let boxIdx = parseInt(y / 3) * 3 + parseInt(x / 3);
                
                this.rows[y].add(this.board[y][x]);
                this.cols[x].add(this.board[y][x]);
                this.boxes[boxIdx].add(this.board[y][x]);

            }
        }

        this.fill(0, 0);
    }

    get_result() {
        return this.board;
    }


    // backtracking to find answer
    fill(y, x) {

        if (y == 8 && x == 9) {
            return true;
        }
        if (x == 9) {
            y++;
            x = 0;
        }

        if (this.board[y][x] == 0) {
            for (let i = 1; i < 10; i++) {
                if (this.is_vaild(x, y, i)) {
                    this.board[y][x] = i;

                    if (this.fill(y, x + 1)) {
                        return true
                    }

                    this.board[y][x] = 0;
                    this.remove_num(x, y, i);
                }
            }

            return false;
        }

        return this.fill(y, x + 1);
    }

    // check and add number
    is_vaild(x, y, num) {
        let boxIdx = parseInt(y / 3) * 3 + parseInt(x / 3);
        
        if (!this.rows[y].has(num) && !this.cols[x].has(num) && !this.boxes[boxIdx].has(num)) {
            this.rows[y].add(num);
            this.cols[x].add(num);
            this.boxes[boxIdx].add(num);
            return true;
        }

        return false
    }

    // remove added number
    remove_num(x, y, num) {
        let boxIdx = parseInt(y / 3) * 3 + parseInt(x / 3);
        this.rows[y].delete(num);
        this.cols[x].delete(num);
        this.boxes[boxIdx].delete(num);
    }
}