/**
 * Let's make a game 🕹
 */

type Position = {
  x: number,
  y: number
}
type Direction = 'up' | 'down' | 'left' | 'right'

const position: Position = { x: 0, y:0 }
function move(direction: Direction): Position {
  switch(direction) {
    case 'up':
      position['y'] ++
      break
    case 'down':
      position['y'] --
      break
    case 'left':
      position['x'] --
      break
    case 'right':
      position['x'] ++
      break
    default:
      throw Error('실행할 수 없습니다.')
  }
  return position
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

// ** 엘리 답 **

const position2 = { x: 0, y:0 }
// 함수내부에서 포지션을 바로 수정하기 때문에 리턴되는 값이 없음.
function move2(direction: Direction) {
  switch(direction) {
    case 'up':
      position.y += 1;
      break
    case 'down':
      position.y -= 1;
      break
    case 'left':
      position.x -= 1;
      break
    case 'right':
      position.x += 1;
      break
    default:
      throw Error(`unknown direction: ${direction}`)
  }
}
