import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../store/actions/user.js';



class Reg extends Component {
    reg=()=>{
        console.log('reg');
        this.props.getUserAPI(this.user.value,this.pass.value,this.props.history);
    }
    render() {
        return (
            <div className="reg">
                <label htmlFor="username" >用户名</label>
                <input type="text" id="username" ref={x=>this.user=x} />
                <label htmlFor="password" >密码</label>
                <input type="text" id="password" ref={x=>this.pass=x} />
                <button onClick={()=>{this.reg()}}>注册</button>
            </div>
        );
    }
}

export default connect((state)=>({...state.user}),actions)(Reg);