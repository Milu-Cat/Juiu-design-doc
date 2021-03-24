// import React from 'react';
import Layout from './layout';
// import Home from './views/home/index';
import Login from './views/login'
import { Route, Switch, withRouter, Redirect, useLocation } from 'react-router-dom'
// import getLoginState from './utils/getLoginState';
import PrivateRoute from './components/privateRoute'
import Empty from './views/empty';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/404' component={Empty} />
        <PrivateRoute path='/' component={Layout} />
        <Redirect from="*" to="/404"></Redirect>
      </Switch>
    </div>
  );
}

export default withRouter(App);
