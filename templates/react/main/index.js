import React from 'react';
import ReactDOM from 'react-dom';
import HomeComponent from './components/Home';
import DashBoard from './components/Dashboard';
import {Router, Route, hashHistory} from 'react-router'
const getRoutes = () =>{
  return <Router history ={hashHistory} >
    <div>
      <Route path = '/' component= {HomeComponent}></Route>
      <Route path = '/dashboard' component= {DashBoard}></Route>
    </div>
  </Router>;
}
ReactDOM.render(
  <div>
    {getRoutes()}
  </div>, document.getElementById('root'));
