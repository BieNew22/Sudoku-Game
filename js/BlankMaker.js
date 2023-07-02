/**
 * Writer - 안학룡(BieNew22)
 * Role of this file
 *              - use seed to make 'sudoku puzzle'
 *              - use get_result() to get 'sudoku' puzzle
 * Algorithm
 *          - 1. random remove one cell
 *          - 2. use solver to check 'is puzzle have single answer?'
 *          - 3. if yes -> move 1.
 *          - 4. if no -> remove another number -> move 2.
 *          - 5. until erase specified number of spaces.
 * Date of latest update - 2023.07.02
 */

class BlankMaker {
    constructor() {
        this.seed = new Seed().get_seed(gameMode);
        this.puzzle = this.seed.map(v => v.slice());

        this.solver = new Solver();

        this.blank = 0;
        if (gameMode.id == 'easy') {
            this.blank = 40;
        } else if (gameMode.id == 'normal') {
            this.blank = 50;
        } else {
            this.blank = 60;
        }
        this.make_puzzle();
    }

    get_result() {
        return this.puzzle;
    }

    make_puzzle() {
        let countBlank = 0;
        let x, y, tmp;
        for (let t = 0; t < 500; t++) { 

            do {
                x = Math.floor(Math.random() * 9);
                y = Math.floor(Math.random() * 9);
            } while (this.puzzle[y][x] == 0);
            
            tmp = this.puzzle[y][x];
            this.puzzle[y][x] = 0;

            this.solver.set_data(this.puzzle);

            if (this.is_availed(this.solver.get_result())) {
                countBlank += 1;
            } else {
                this.puzzle[y][x] = tmp;
            }

            if (countBlank == this.blank) {
                break;
            }
        }
    }

    is_availed(data) {
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                if (data[y][x] != this.seed[y][x]) {
                    return false;
                }
            }
        }

        return true;
    }
}