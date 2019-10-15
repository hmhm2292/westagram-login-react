import React from "react";

class LoginButton extends React.Component {
  render() {
    return (
      <div className="loginButtonDiv">
        <button
          className="loginButton"
          style={{ opacity: this.props.handleChangeColor }}
        >
          <span className="loginButtonText">Log In</span>
        </button>
      </div>
    );
  }
}

export default LoginButton;
