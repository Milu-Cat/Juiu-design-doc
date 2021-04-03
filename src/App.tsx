// import React from 'react';
import Layout from "./layout";
// import Home from './views/home/index';
import Login from "./views/login";
import {
  Route,
  Switch,
  withRouter,
  Redirect,
  useLocation,
} from "react-router-dom";
// import getLoginState from './utils/getLoginState';
import PrivateRoute from "./components/privateRoute";
import Empty from "./views/empty";
import Store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store= { Store }>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/404" component={Empty} />
          <PrivateRoute path="/" component={Layout} />
          <Redirect from="*" to="/404"></Redirect>
        </Switch>
      </Provider>
    </div>
  );
}

export default withRouter(App);
