{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loadeddddd' } }); // 😃 loaded :::: 웃는 이모지와 body의 내용을 보내줌
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network :::: 비명을 지르는 이모지와 이유를 출력함

  function printLoginState(typeState: ResourceLoadState) {
    switch(typeState.state) {
      case 'loading':
        console.log('👀 loading...')
        break
      case 'success':
        console.log(`😃 ${typeState.response.body}`)
        break
      case 'fail':
        console.log(`😱 ${typeState.reason}`)
        break
      default:
        throw Error('Error...')
    }
  }

  // ** 엘리 답 **
function printLoginState2(state: ResourceLoadState) {
  switch(state.state) {
    case 'loading':
      console.log('👀 loading...')
      break
    case 'success':
      console.log(`😃 ${state.response.body}`)
      break
    case 'fail':
      console.log(`😱 ${state.reason}`)
      break
    default:
      throw Error(`unknown state: ${state}`)
  }
}
}