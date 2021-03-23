// import React from 'react';
import Layout from './layout';
// import Home from './views/home/index';
import Login from './views/login'
import { Route, Switch, withRouter } from 'react-router-dom'
// import getLoginState from './utils/getLoginState';
import PrivateRoute from './components/privateRoute'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/' component={Layout}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
