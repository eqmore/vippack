import React, { Component } from 'react';
import './index.less';
import HomeHeader from './HomeHeader';
import {connect} from 'react-redux';
import actions from '../../store/actions/home.js';
import HomeSlider from './HomeSlider';


class Home extends Component {
    componentDidMount(){
        if(this.props.sliders.length===0){
        this.props.GetSlidersAPI();
        }
    }
    //
    selectLesson=(les)=>{
        this.props.UpdateCurLesson(les);
    }
    render() {
        console.log(this.props.sliders.length)
        return (
            <div>
                <HomeHeader selectLesson={this.selectLesson}/>
                {this.props.sliders.length?
                <HomeSlider lists={this.props.sliders}/>:"正在加载"
                }
            </div>
        );
    }
}

//mapStateToProps 将redux中的数据变成属性
//mapDispatchToProps 可以直接传一个actionCreator的对象
//this.props.setCurrentLesson this.props.home.sliders
export default connect((state)=>({...state.home}),actions)(Home);