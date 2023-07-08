{
  /**
   * Union Types : OR
   * 발생 할 수 있는 모든 케이스 중에 하나만 선택해야 할 때 사용
   */

  type Direction = 'left' | 'rignt' | 'up' | 'down';

  function moveWhere(direction: Direction) {
    console.log(direction);
  }

  moveWhere('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function loginTest(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }
}
