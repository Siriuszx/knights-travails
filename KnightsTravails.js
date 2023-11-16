class KnightsTravails {
    #boardHeight = 7;
    #boardWidth = 7;

    #board = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ];

    #stepDirections = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];

    #connectionsCounter = 0;

    constructor() {

    }

    moveKnight(coordStart, coordEnd) {
        let stepCounter = 0;
        let cellQueue = [coordStart];

        while (cellQueue.length != 0) {
            // console.log(`Queue[0] - X:${cellQueue[0][0]}, Y:${cellQueue[0][1]}`);
            // console.log(`Queue[last] - X:${cellQueue[cellQueue.length - 1][0]}, Y:${cellQueue[cellQueue.length - 1][1]}\n`);

            if(coordEnd[0] == cellQueue[0][0] && coordEnd[1] == cellQueue[0][1]) this.#connectionsCounter++;

            this.#stepDirections.forEach(step => {
                let nextStepCoord = [cellQueue[0][0] + step[0], cellQueue[0][1] + step[1]];

                // console.log(`Next step - X: ${nextStepCoord[0]}, Y: ${nextStepCoord[1]}`);

                if (this.canMove(nextStepCoord)) {
                    cellQueue.push(nextStepCoord);
                    this.#board[nextStepCoord[0]][nextStepCoord[1]] = 'traversed';
                    stepCounter++;
                }
            });

            // console.log(cellQueue);
            cellQueue.shift();
        }

        // console.log("exit");
        // console.log(`connections count: ${this.#connectionsCounter}`);

        return this.#connectionsCounter;
    }

    canMove(coord) {
        // console.log(`coord exists: ${this.board[coord[0], coord[1]]}`);
        if (coord[0] > this.#boardWidth || coord[0] < 0)
            return false;
        if (coord[1] > this.#boardHeight || coord[1] < 0)
            return false;
        if (this.#board[coord[0]][coord[1]]) {
            return false;
        }

        return true;
    }
}

export default KnightsTravails;