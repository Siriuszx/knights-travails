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
        
    }

    #buildList() {
        let counter = 0;

        for (let i = 0; i <= 7; i++) {
            for (let j = 0; j <= 7; j++) {
                this.board[i][j] = [];
                counter++;
                this.#stepDirections.forEach(step => {
                    let nextStepCoord = [i + step[0], j + step[1]];

                    if (this.canMove(nextStepCoord)) this.board[i][j].push(nextStepCoord);
                });
                // console.log(this.board[i][j]);
            }
        }

        // console.log(`Counter: ${counter}`);
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