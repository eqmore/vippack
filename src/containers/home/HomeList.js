import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomeList extends Component {
    render() {

        return (
            <ul className="home-lists">
                {this.props.lists.map((item,index)=>{
                    let {url,title,price,lessonId:id}  = item;
                    // console.log(id,item)
                    return (
                        <Link to={{pathname:`/detail/${id}`,state:item}}>
                        <li key={index}>
                            <img src={url}/>
                            <p>{title}</p>
                            <span>{price}</span>
                        </li>
                        </Link>
                    )
                })
                }
            </ul>
        );
    }
}
export default HomeList;