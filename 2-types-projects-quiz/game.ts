/**
 * Let's make a game 🕹
 */

type Direction = 'up' | 'down' | 'left' | 'right'
type Position = {
  x: number;
  y: number;
};
type GameResult = Position | undefined


const position = { x: 0, y: 0}
const move = (direction: Direction): GameResult => {
  switch (direction) {
    case 'up':
      position.y += 1;
      return position;
    case 'down':
      position.y -= 1;
      return position;
    case 'left':
      position.x -= 1;
      return position;
    case 'right':
      position.x += 1;
      return position;
    default:
      return undefined;
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
