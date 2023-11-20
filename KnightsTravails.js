class KnightsTravails {
    #stepDirections = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];

    constructor() {

    }

    moveKnight(start, end) {
        let traversed = new Set();
        let queue = [[start[0], start[1]]];
        let steps = 0;

        traversed.add(`[${queue[0][0]}, ${queue[0][1]}]`);

        while (queue.length != 0) {
            if (queue[0][0] == end[0] && queue[0][1] == end[1]) return steps;

            for (let step of this.#stepDirections) {
                let next = [(queue[0][0] + step[0]), (queue[0][1] + step[1])];

                if (!traversed.has(`[${next[0]}, ${next[1]}]`)) {
                    traversed.add(`[${next[0]}, ${next[1]}]`);
                    queue.push(next);
                }
            }

            queue.shift();
        }

        return steps;
    }
}

export default KnightsTravails;