import KnightsTravails from "./KnightsTravails.js";

let knight = new KnightsTravails();

// let conCount = 0;
// console.log(`Connections:`);
// knight.board[1][2].forEach(coord => {
//     console.log(`\t[${coord[0]}, ${coord[1]}]`);
//     conCount++;
// });
// console.log(`Connections count: ${conCount}`);

console.log(knight.moveKnight([3, 3], [4, 3]));