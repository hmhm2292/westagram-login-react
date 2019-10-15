import React from "react";
import "./LoginPage.css";
import LoginInfo from "./components/LoginInfo.js";
import SignUp from "./components/SignUp.js";
import GetTheApp from "./components/GetTheApp.js";

function LoginPage() {
  return (
    <div className="loginPage">
      <LoginInfo />
      <SignUp />
      <GetTheApp />
    </div>
  );
}

export default LoginPage;
