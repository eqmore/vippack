import React, { Component } from 'react';
import './loading.less';
class Loading extends Component {
    render() {
        return (
            <div className="box">
            <div className="loader">
                <div className="loading-3">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
            </div>
        );
    }
}

export default Loading;