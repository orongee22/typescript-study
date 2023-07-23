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

  const printLoginState = (state: ResourceLoadState) => {
    if(state.state === 'loading') {
      return '👀 loading...'
    } else if (state.state === 'success') {
      return '😃' + `${state.response.body}`;
    } else {
      return '😱' + `${state.reason}`;
    }
  }

  // 올바른 출력 방법은 console.log(test()); 혹은 const result = test(); 
  // 함수가 반환하는 값은 호출한 곳에서 출력하거나 저장하여 사용해야한다. 
  console.log(printLoginState({ state: 'loading' })); // 👀 loading...
  console.log(printLoginState({ state: 'success', response: { body: 'loaded' } })); // 😃 loaded
  console.log(printLoginState({ state: 'fail', reason: 'no network' })); // 😱 no network
}
