import HomeComponent from './Home';
import DashBoard from './Dashboard';
import {Router, Route, hashHistory} from 'react-router'
export const getRoutes = () => (
  <Router>
    <div>
      <Route path = '/' Component= {HomeComponent}></Route>
      <Route path = '/dashboard' Component= {DashBoard} ></Route>
    </div>
  </Router>
);

export const routeTo = (pathname,state) => {
  hashHistory.push({
    pathname,state
  })
};
