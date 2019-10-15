import React from "react";

class InputPassUser extends React.Component {
  render() {
    console.log(this.props.name);
    return (
      <div className={this.props.class}>
        <input
          name={this.props.name}
          value={this.props.value}
          className={this.props.inputClass}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.handleOnChange}
        />
      </div>
    );
  }
}

export default InputPassUser;
