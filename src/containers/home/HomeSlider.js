import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
class HomeSlider extends Component {
    constructor(props) {
        super(props);
        this.state={index:0}
    }
    
    render() {
        console.log(this.props.lists);
        let opt={ continuous: false,auto:300,
        callback:(index)=>{this.setState({index});} }
        return (
            <div className="home-swiper">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                {
                    this.props.lists.map((item,index)=>(
                    <div key={index}><img src={item.photoUrl} /></div>
                    ))
                } 
                </ReactSwipe>
                <div className="dots">
                {
                    this.props.lists.map((item,index)=>(
                    <span key={index} className={this.state.index===index?'active':''}></span>
                    ))
                }
                </div>
            </div>
            
        );
    }
}

export default HomeSlider;