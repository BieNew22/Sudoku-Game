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
        
        this.blank = 0;

        if (gameMode.innerText == 'easy') {
            
        }
    
    }

    make_puzzle(depth) {

    }
}