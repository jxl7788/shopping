import React, { Component } from 'react';
import "../assets/css/login.css"


class Login extends Component {
  render() {
    return (
      <React.Fragment>
            <header className="header1">
                <div className="header">
                    <a className="return_btn" href="javascript:window.history.go(-1)"></a>
                    登录
                </div>
            </header>
            <div className="logodiv"><img src="images/logo.png" alt=""/></div>
            <form className="loginF">
                <dl>
                    <dt>账号</dt>
                    <dd><input type="text" /></dd>
                    <div className="clearx"></div>
                </dl>
                <dl>
                    <dt>密码</dt>
                    <dd><input type="password"  /></dd>
                    <div className="clearx"></div>
                </dl>
                <a className="btn" href="javascript:;">登录</a>
                <div className="linkbox">
                    <a className="link1" href="javascript:;">手机快速注册</a>
                    <a className="link2" href="javascript:;">找回密码</a>
                </div>
            </form>
      </React.Fragment>
    );
  }
}

export default Login;