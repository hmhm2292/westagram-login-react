import React from "react";
import InputPassUser from "./InputPassUser.js";
import LoginButton from "./LoginButton.js";

class UserInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      userInputValue: "",
      passwordInputValue: "",
      buttonOpacity: 0.3,
      display: ""
    };
  }

  handleOnChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        const { userInputValue, passwordInputValue } = this.state;
        if (userInputValue.length > 0 && passwordInputValue.length > 0) {
          this.setState(() => {
            return { buttonOpacity: 1, display: "none" };
          });
        }
        if (userInputValue.length === 0 || passwordInputValue.length === 0) {
          this.setState(() => {
            return { buttonOpacity: 0.3, display: "none" };
          });
        }
        if (userInputValue.length === 0) {
          this.setState(() => {
            return { display: "block" };
          });
        }
      }
      // }
      // buttonOpacity:
      //   userInputValue.length > 0 && passwordInputValue.length > 0 ? 1 : 0.3
      //});
    );
  };

  //   if (
  //     event.target.className === "username2" &&
  //     event.target.value.length > 0
  //   ) {
  //     this.setState(() => {
  //       return { userInputValue: true };
  //     });
  //   } else if (
  //     event.target.className === "username2" &&
  //     event.target.value.length === 0
  //   ) {
  //     this.setState(() => {
  //       return { userInputValue: false };
  //     });
  //   }

  //   if (
  //     event.target.className === "password2" &&
  //     event.target.value.length > 0
  //   ) {
  //     this.setState(() => {
  //       return { passwordInputValue: true };
  //     });
  //   } else if (
  //     event.target.className === "password2" &&
  //     event.target.value.length === 0
  //   ) {
  //     this.setState(() => {
  //       return { passwordInputValue: false };
  //     });
  //   }
  // };

  // changeColor = () => {
  //   const styles = {
  //     filled: "1",
  //     notFilled: "0.3"
  //   };
  //   if (
  //     this.state.userInputValue === true &&
  //     this.state.passwordInputValue === true
  //   ) {
  //     return styles.filled;
  //   } else {
  //     return styles.notFilled;
  //   }
  // };

  render() {
    const { userInputValue, passwordInputValue, buttonOpacity } = this.state;
    const { handleOnChange } = this;
    return (
      <form className="userInfo">
        <InputPassUser
          name="userInputValue"
          value={userInputValue}
          handleOnChange={handleOnChange}
          class="username"
          inputClass="username2"
          type="text"
          placeholder="Phone Number, username, or email"
        />
        {console.log(this.state.display)}
        <div style={{ display: this.state.display }} className="showWarning">
          Please Write Your Username
        </div>
        <InputPassUser
          name="passwordInputValue"
          value={passwordInputValue}
          handleOnChange={handleOnChange}
          class="password"
          inputClass="password2"
          type="password"
          placeholder="Password"
        />
        <LoginButton opacity={buttonOpacity} />
      </form>
    );
  }
}

export default UserInfo;
