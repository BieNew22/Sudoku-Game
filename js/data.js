let selectMode = document.getElementById("input");
let selectNum = document.getElementById("numPad1");

class Seed {
    constructor() {
        this.easy = [

        ];

        this.normal = [

        ];

        this.hard = [

        ];
    }

    getEasy() {
        return this.easy;
    }

    getNormal() {
        return this.normal;
    }

    getHard() {
        return this.hard;
    }

    getFullBoard(mood) {
        return mood[Math.floor(Math.random() * mood.length)];
    }
}

class Board {
    constructor() {
        this.table = new Array(9);
        for (let i = 0; i < 9; i++) {
            this.table[i] = new Array(9);
        }
    }
}