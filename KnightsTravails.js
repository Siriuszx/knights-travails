class KnightsTravails {
    boardHeight = 7;
    boardWidth = 7;

    board = [];

    stepDirections = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];

    constructor() {

    }

    moveKnight(coordCurrent, coordEnd) {
        let stepCounter = 0;
        let cellQueue = [coordCurrent];

        while (cellQueue.length != 0) {
            console.log(`First - X:${cellQueue[0][0]}, Y:${cellQueue[0][1]}`);

            this.stepDirections.forEach(step => {
                let nextStepCoord = [cellQueue[0][0] + step[0], cellQueue[0][1] + step[1]];

                if (this.canMove(nextStepCoord)) {
                    cellQueue.push(nextStepCoord);
                    this.board[nextStepCoord[0], nextStepCoord[1]] = 'traversed';
                    stepCounter++;
                }
            });
            cellQueue.shift();
        }

        return stepCounter;
    }

    canMove(coord) {
        if (coord[0] > this.boardWidth || coord[0] < 0)
            return false;
        if (coord[1] > this.boardHeight || coord[1] < 0)
            return false;
        if (this.board[coord[0], coord[1]])
            return false;

        return true;
    }
}

export default KnightsTravails;