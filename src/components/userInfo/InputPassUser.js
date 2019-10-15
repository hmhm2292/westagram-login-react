import React from "react";

class InputPassUser extends React.Component {
  render() {
    return (
      <div className={this.props.class}>
        <input
          className={this.props.inputClass}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onKeyUp={this.props.handleKeyUp}
        />
      </div>
    );
  }
}

export default InputPassUser;
