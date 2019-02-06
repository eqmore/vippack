import React, { Component } from 'react';
import './index.less';
import HomeHeader from './HomeHeader';
import {connect} from 'react-redux';
import actions from '../../store/actions/home.js';
import HomeSlider from './HomeSlider';
import Loading from '../../components/Loading';

import HomeList from './HomeList';
import {Loadmore, pullRefresh} from '../../common/util.js'

class Home extends Component {
    componentDidMount(){
        if(this.props.sliders.length===0){
            this.props.GetSlidersAPI();
        }
        if(this.props.lesson.list.length===0){
            console.log('length=0')
            this.props.GetLessonsAPI();
        }
        // Loadmore(this.x,this.props.GetLessonsAPI);
        pullRefresh(this.x,this.props.RefreshAPI);
    }
    //
    selectLesson=(les)=>{
        this.props.UpdateCurLesson(les);
    }
    loadMore=()=>{
        this.props.GetLessonsAPI();
    }
    render() {
        return (
            <div>
                <HomeHeader selectLesson={this.selectLesson}/>
                <div className="content" ref={x=>this.x=x}>
                    {this.props.sliders.length?
                    <HomeSlider lists={this.props.sliders}/>:<Loading/>
                    }
                    <h2><i className="iconfont icon-earth">  </i>全部课程</h2>
                    <HomeList lists={this.props.lesson.list} />
                    {this.props.lesson.isLoading?<Loading/>:""}
                    {this.props.lesson.hasMore?<button
                    onClick={this.loadMore}
                    >加载更多</button>:""}
                </div>
                
            </div>
        );
    }
}

//mapStateToProps 将redux中的数据变成属性
//mapDispatchToProps 可以直接传一个actionCreator的对象
//this.props.setCurrentLesson this.props.home.sliders
export default connect((state)=>({...state.home}),actions)(Home);