import React, { Component } from 'react';
import Tab from '../components/Tab';
import '../common/reset.less';
class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
               <Tab></Tab>
            </div>
        );
    }
}

export default App;