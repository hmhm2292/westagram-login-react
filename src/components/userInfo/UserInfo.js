import React from "react";
import InputPassUser from "./InputPassUser.js";
import LoginButton from "./LoginButton.js";

class UserInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      usernamePlaceholder: "Phone Number, username, or email",
      passwordPlaceholder: "Password",
      usernameClass: "username",
      passwordClass: "password",
      userInputClass: "username2",
      passwordInputClass: "password2",
      userType: "text",
      passwordType: "password",
      userInputValue: false,
      passwordInputValue: false
    };
  }

  handleKeyUp = event => {
    if (
      event.target.className === "username2" &&
      event.target.value.length > 0
    ) {
      this.setState(() => {
        return { userInputValue: true };
      });
    } else if (
      event.target.className === "username2" &&
      event.target.value.length === 0
    ) {
      this.setState(() => {
        return { userInputValue: false };
      });
    }

    if (
      event.target.className === "password2" &&
      event.target.value.length > 0
    ) {
      this.setState(() => {
        return { passwordInputValue: true };
      });
    } else if (
      event.target.className === "password2" &&
      event.target.value.length === 0
    ) {
      this.setState(() => {
        return { passwordInputValue: false };
      });
    }
  };

  changeColor = () => {
    const styles = {
      filled: "1",
      notFilled: "0.3"
    };
    if (
      this.state.userInputValue === true &&
      this.state.passwordInputValue === true
    ) {
      return styles.filled;
    } else {
      return styles.notFilled;
    }
  };

  render() {
    return (
      <form className="userInfo">
        <InputPassUser
          handleKeyUp={this.handleKeyUp}
          class={this.state.usernameClass}
          inputClass={this.state.userInputClass}
          type={this.state.userType}
          placeholder={this.state.usernamePlaceholder}
        />
        <InputPassUser
          handleKeyUp={this.handleKeyUp}
          class={this.state.passwordClass}
          inputClass={this.state.passwordInputClass}
          type={this.state.passwordType}
          placeholder={this.state.passwordPlaceholder}
        />
        <LoginButton handleChangeColor={this.changeColor()} />
      </form>
    );
  }
}

export default UserInfo;
