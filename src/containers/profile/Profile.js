import React, { Component } from 'react';
import './index.less';
import {Link} from 'react-router-dom';
class Profile extends Component {
    render() {
        return (
            <div className="profile-box">
                <Link to={'/reg'}>登录</Link>
            </div>
        );
    }
}

export default Profile;