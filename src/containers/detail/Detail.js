import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getLesson} from '../../api/home';
import './index.less';
import 'babel-polyfill';


class Detail extends Component {
    constructor(){
        super();
        this.state={
            lesson:{}
        }
    }
    async componentDidMount(){
        let lesson = this.props.location.state;
        if(!lesson){
            console.log(this.props)
            lesson= await getLesson(this.props.match.params.id);
        }
        this.setState({lesson});
    }
    render() {
        let {video,poster} = this.state.lesson;
        console.log(this.state.lesson,video,poster)
        return (
            <div className="detail-content">
                <video control={true}  src={video} poster={poster}/>
            </div>
        );
    }
}

export default withRouter(Detail);