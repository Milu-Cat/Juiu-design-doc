import React,{FC, ReactElement} from 'react';
import { Redirect, Route, Switch, withRouter, useHistory } from 'react-router-dom'
import Navigation from '../components/navigation/index';
import './index.scss';
import Router, { RouterOptions } from '../router/index';
import PrivateRoute, { PrivateRouteOptions } from '../components/privateRoute';

const Layout: FC = () => {
  // function setRoute(arg: RouterOptions[]){
  //   let routeArr: ReactElement[] = []
  //   function flatArr(list: RouterOptions[]) {
  //     for (let item of list) {
  //       routeArr.push(<PrivateRoute path={item.path} component={item.component as React.ReactType} key={item.path} />)
  //       item.children && flatArr(item.children as RouterOptions[])
  //     }
  //   }
  //   flatArr(arg)
  //   return routeArr
  // }
  // function getRoute():any {
  //   setRoute(Router).map(item => {
  //     return item
  //   })
  // }

  function setRoute(list: RouterOptions[]):any {
    return list.map(item => {
      if (item.children) {
        return item.children.length ? setRoute(item.children) : null
      } else {
        return (
           <PrivateRoute path={item.path} component={item.component as React.ReactType} key={item.path}/>
        )
      }
    })
  }
console.log(setRoute(Router))
  return (
    <div className="D-layout">
      <div className="navigation">
        <Navigation/>
      </div>
      <div className="content">
        <Switch>
          {
            setRoute(Router)
          }
        </Switch>
      </div>
    </div>
  )
}

export default withRouter(Layout) 