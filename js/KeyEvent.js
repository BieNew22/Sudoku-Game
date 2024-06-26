/**
 * Writer - 안학룡(BieNew22)
 * Role of this file
 *              - A set of event related functions
 * Date of latest update - 2023.07.02
 */

function select_difficulty(type) {
    gameMode = type;

    document.getElementById("popup_background").style.display = 'none';
    document.getElementById("popup_content").style.display = 'none';

    start_game();
}

function select_mode(type) {
    selectMode.classList.remove('select');
    selectMode = type;
    selectMode.classList.add('select');
}

function select_num(num) {
    selectNum.classList.remove('select');
    selectNum = num;
    selectNum.classList.add('select');
}

function click_cell(cell) {

    if (selectMode.id == "input") {
        // if mode = input
        cell.innerText = selectNum.innerText;

    } else if (selectMode.id == "candidate") {
        // if mode = input candidate

        // if writed cell
        if (cell.innerText != "" && cell.children.length == 0) {
            return;
        }

        // if not has candidate cell
        if (cell.children.length == 0) {
            for (let i = 0; i < 9; i++) {
                let candidate = document.createElement("div");

                candidate.classList.add('candidate_cell');

                cell.appendChild(candidate);
            }
        }
        
        cell.children[parseInt(selectNum.innerText) - 1].innerText = selectNum.innerText;

    } else if (selectMode.id == "erase") {
        // if mode = erase

        // erase candidate number
        if (cell.innerText.length > 1) {
            cell.children[parseInt(selectNum.innerText) - 1].innerText = '';
        } else {
            // earse nubmer
            cell.innerText = '';
        }
    }
}

function click_check() {
    board.check_result();
}