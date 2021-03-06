import React,{FC} from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import Navigation from '../components/navigation/index';
import './index.scss';
import Router from '../router/index';
import PrivateRoute from '../components/privateRoute';

const Layout:FC = () => {
  return (
    <div className="D-layout">
      <div className="navigation">
        <Navigation/>
      </div>
      <div className="content">
        <Switch>
          {
            Router.map(item => {
              // return (<Route exact path={item.path} component={item.component} key={item.path}></Route>)
              return (
                <PrivateRoute path={item.path} component={item.component} key={item.path}/>
              )
            })
          }
        </Switch>
      </div>
    </div>
  )
}

export default Layout