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

    // check state changeable
    if (cell.classList.contains('fixed')) {
        return;
    }

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