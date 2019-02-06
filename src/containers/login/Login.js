import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <label htmlFor="username" >用户名</label>
                <input type="text" id="username" />
                <label htmlFor="password" >密码</label>
                <input type="text" id="password" />
                <Link to={'/reg'}>前往注册</Link>
                <button>登录</button>
            </div>
        );
    }
}

export default Login;