import React, { Component } from 'react';
import ReactDOM,{render} from 'react-dom';

import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './containers/home/Home';
import Profile from './containers/profile/Profile';
import Lesson from './containers/lesson/Lesson';
import App from './containers/App';

import store from './store'
import {Provider} from 'react-redux';

console.log(store);
ReactDOM.render(
<Router>
    <Provider store={store}>
    <App>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/lesson"  component={Lesson} />
            <Route path="/profile"  component={Profile} />
        </Switch>
    </App>
    </Provider>
</Router>,window.root);