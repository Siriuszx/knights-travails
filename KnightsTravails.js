import Knight from "./Knight.js";

class KnightsTravails {
    #boardWidth = 8;
    #boardHeight = 8;

    #traversed = new Set();
    #stepDirections = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];

    constructor() { }

    moveKnight(start, end) {
        let queue = [new Knight([[start[0], start[1]]])];

        this.#traversed.add(`[${queue[0].current[0]}, ${queue[0].current[1]}]`);

        while (queue.length != 0) {
            let stepQueue = [];

            while (queue.length != 0) {
                if (queue[0].current[0] == end[0] && queue[0].current[1] == end[1]) return queue[0].stepList;

                for (let step of this.#stepDirections) {
                    let next = [(queue[0].current[0] + step[0]), (queue[0].current[1] + step[1])];

                    if (this.canMove(next)) {
                        this.#traversed.add(`[${next[0]}, ${next[1]}]`);
                        stepQueue.push(new Knight(queue[0].getPushCopy(next)));
                    }
                }

                queue.shift();
            }

            queue = stepQueue;
        }

        return [];
    }

    canMove(step) {
        if ((step[0] < 0) || (step[0] > this.#boardWidth - 1)) return false;
        if ((step[1] < 0) || (step[1] > this.#boardHeight - 1)) return false;
        if (this.#traversed.has(`[${step[0]}, ${step[1]}]`)) return false;

        return true;
    }
}

export default KnightsTravails;