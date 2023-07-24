/**
 * Let's make a game 🕹
 */

// type Position = 'up' | 'down' | 'left' | 'right';

// function move(position: Position | undefined) {
//   switch (position) {
//     case 'up':
//       return {
//         x: 0,
//         y: 1,
//       };
//     case 'down':
//       return {
//         x: 0,
//         y: 0,
//       };
//     case 'left':
//       return {
//         x: -1,
//         y: 0,
//       };
//     case 'right':
//       return {
//         x: 0,
//         y: 0,
//       };
//     default:
//       return {
//         x: 0,
//         y: 0,
//       };
//   }
// }

// console.log(move('up')); // { x: 0, y: 0}
// // move('up');
// console.log(move('down')); // { x: 0, y: 1}
// // move('down');
// console.log(move('left')); // { x: 0, y: 0}
// // move('left');
// console.log(move('right')); // { x: -1, y: 0}
// // move('right');
// console.log(move(undefined)); // { x: 0, y: 0}

// 전 뭘 한걸까요.....얼탱이가 없네 진짜......코드 부끄럽다...

// 이건 해설을 보고 Direction만 따로 타입을 지정했습니다.
const position = { x: 0, y: 0 };
type Direction = 'up' | 'down' | 'left' | 'right';
function move(direction: Direction) {
  switch (direction) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    default:
      throw new Error(`unkown direction ${direction}`);
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
