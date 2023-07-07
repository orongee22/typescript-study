{
  type SuccessState = {
    result: "success";
    res: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success",
      res: {
        body: "logged in!",
      },
    };
  }

  const printLoginState = (state: LoginState) => {
    if (state.result === "success") {
      console.log(state.res.body);
    } else {
      console.log(state.reason);
    }
  };
}
