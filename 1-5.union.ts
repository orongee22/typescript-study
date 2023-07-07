{
  type Direction = "left" | "right" | "up" | "down";
  function move(dir: Direction) {
    return `I'm moving ${dir}!`;
  }

  move("down");

  type FontSize = 8 | 16 | 24;
  const fontSize: FontSize = 8;

  const getFontSize = (sz: FontSize) => {
    console.log(sz + "px");
    return sz + "px";
  };

  getFontSize(fontSize); // 8px

  type SuccessState = {
    res: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  // function login(): SuccessState | FailState {
  //   return {
  //     res: {
  //       body: "logged in!",
  //     },
  //   };
  // }

  type LoginState = SuccessState | FailState;

  async function login(id: string, pw: string): Promise<LoginState> {
    return {
      res: {
        body: "logged in!",
      },
    };
  }

  const printLoginState = (state: LoginState) => {
    if ("res" in state) {
      console.log(state.res.body);
    } else {
      console.log(state.reason);
    }
  };
}
