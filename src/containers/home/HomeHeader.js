import React, { Component } from 'react';
import logo from '../../common/images/logo.png';
import {Transition} from 'react-transition-group';


class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state={
            isShow:false
        }
    }
    changeShow =()=>{
        this.setState({isShow:!this.state.isShow});
    }
    render() {
        const duration =300;
        const defaultStyle = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,
            display:"none"
          }
          
          const transitionStyles = {
            entering: { opacity: 0 },
            entered:  { opacity: 1 },
          };
        return (
            <div className="home-header">
            <div className="header-logo">
                <img src={logo}/>
                <div onClick={this.changeShow}>
                    {this.state.isShow?<i className="iconfont icon-earth"></i>:
                <i className="iconfont icon-dashboard"></i>}
                    
                </div>
            </div>
             <Transition in={this.state.isShow} timeout={300}
             onEnter={(node)=>{node.style.display="block"}} 
             onExited={(node)=>{node.style.display="none"}} >
            {(state) => (
                <ul className="header-menu" style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}
                    onClick={(e)=>{
                        // console.dir(e.target.dataset.type)
                        this.props.selectLesson(e.target.dataset.type);
                        this.setState({isShow:false});
                    }}
                >
                    <li data-type="all">全部</li>
                    <li data-type="react">React</li>
                    <li data-type="vue">Vue</li>
                </ul>
            )}
                
            </Transition> 
            </div>
        );
    }
}

export default HomeHeader;