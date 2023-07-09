{
  /**
   *  Union Types: "OR"
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail ⏱ 성공하면 response body, 실패하면 이유(string) 반환
  type SuccessState = { // 성공했을 때 타입
    response: {
      body: string;
    };
  };
  type FailState = {  // 실패했을 때 타입
    reason: string; 
  };
  type LoginState = SuccessState | FailState; // 따로 이렇게 빼낸 타입으로 지정하는게 좋아

  function login1(): LoginState { // 보통은 Promise<LoginState>로 작성 될 거야.
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState1(state: LoginState): void { // (void는 생략가능)
    if ('response' in state) { // response라는 키가 state라는 객체 안에 키가 있다면..!!
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
  // 사실 이건 별로 좋은 예가 아냐.. 1-6으로 가보자!!
}
