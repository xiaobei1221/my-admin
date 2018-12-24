import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

import Tables from './components/table';
import Myform from './components/form';


ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Tables}/>
    <Route path="/table" component={Tables}></Route>
    <Route path="/form" component={Myform}></Route>

    </Route>

</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
