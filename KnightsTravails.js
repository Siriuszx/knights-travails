import Knight from "./Knight.js";

class KnightsTravails {
    #boardHeight = 7;
    #boardWidth = 7;

    board = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    #stepDirections = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];

    constructor() {
        this.#buildList();
    }

    moveKnight(coordStart, coordEnd) {
        let queue = [new Knight(coordStart, [[coordStart[0], coordStart[1]]])];
        let stepCount = 0;

        while (queue.length != 0) {
            if ((queue[0].current[0] == coordEnd[0]) && (queue[0].current[1] == coordEnd[1])) return queue[0].history;

            this.board[queue[0].current[0]][queue[0].current[1]].forEach(vertex => {
                console.log(vertex);

                if ((vertex[0] != queue[0].current[0]) && (vertex[1] != queue[0].current[1])) queue.push(new Knight(vertex, queue[0].push(vertex)));
            });

            queue.shift();
            stepCount++;
        }

        return null;
    }

    #buildList() {
        let counter = 0;
        let trace = "";

        for (let i = 0; i <= 7; i++) {
            for (let j = 0; j <= 7; j++) {
                this.board[i][j] = [];
                counter++;
                this.#stepDirections.forEach(step => {
                    let nextStepCoord = [i + step[0], j + step[1]];

                    if (this.canMove(nextStepCoord)) this.board[i][j].push(nextStepCoord);
                });
            }
        }
    }

    canMove(coord) {
        if (coord[0] > this.#boardWidth || coord[0] < 0)
            return false;
        if (coord[1] > this.#boardHeight || coord[1] < 0)
            return false;

        return true;
    }
}

export default KnightsTravails;