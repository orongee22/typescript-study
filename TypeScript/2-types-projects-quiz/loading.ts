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

  printLoginStateA({ state: 'loading' }); // 👀 loading...
  printLoginStateA({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginStateA({ state: 'fail', reason: 'no network' }); // 😱 no network

  function printLoginStateA(resource: ResourceLoadState) {
    if (resource.state === 'loading') {
      console.log('👀 loading...');
    } else if (resource.state === 'success') {
      console.log(`${resource.response.body}`);
    } else {
      console.log(`${resource.reason}`);
    }
  }
}

// 음..이것도 switch문을 썼군요.. 전 if문을 사용했답니다.
