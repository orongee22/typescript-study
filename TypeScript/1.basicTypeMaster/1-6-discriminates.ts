{
  /**
   Discriminated Union Type : 구별된 유니언 타입
   * 동일한 키에 다른 값을 지정
   * 조금 더 직관적으로 타입 작성 가능
   */

  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  // 좋지 않은 예
  // function printLoginState(state: LoginState) {
  //   if ('response' in state) {
  //     console.log(`🎁 ${state.response.body}`);
  //   } else {
  //     console.log(`😒 ${state.reason}`);
  //   }
  // }

  // 좋은 예
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`🎁 ${state.response.body}`);
    } else {
      console.log(`😒 ${state.reason}`);
    }
  }
}
