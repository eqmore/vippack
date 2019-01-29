import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
class HomeSlider extends Component {
    render() {
        console.log(this.props.lists);
        return (
            <div className="content">
                <ReactSwipe className="carousel" swipeOptions={{ continuous: false,auto:300 }}>
                 {

                    this.props.lists.map((item,index)=>(
                    <div key={index}><img src={item.photoUrl} /></div>
                    ))} 
                </ReactSwipe>
            </div>
        );
    }
}

export default HomeSlider;