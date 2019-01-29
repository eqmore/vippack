import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Tab.less';

class Tab extends Component {
    render() {
        return (
            <nav className="nav">
                <NavLink to="/" exact><i className="iconfont icon-earth"></i><span>首页</span></NavLink>
                <NavLink to="/lesson"><i className="iconfont icon-dashboard"></i><span>我的课程</span></NavLink>
                <NavLink to="/profile"><i className="iconfont icon-Dollar"></i><span>个人中心</span></NavLink>

            </nav>
        );
    }
}

export default Tab;