import React, { FC, ReactElement } from "react";
import {  Link } from 'react-router-dom';
import {
  Redirect,
  Route,
  Switch,
  withRouter,
  useHistory,
  NavLink,
} from "react-router-dom";
import Navigation from "../components/navigation/index";
import "./index.scss";
import Router, { RouterOptions } from "../router/index";
import PrivateRoute, { PrivateRouteOptions } from "../components/privateRoute";
import { Dropdown } from 'juiu-design';
import { getRouterInfo } from '../utils/pagesUtils';

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
  const getCrumbs = () => {
    const pathNameArr = getRouterInfo('array') as string[]
    let res:any[] = []
    pathNameArr.length && pathNameArr.map((v, index) => {
      const first = v[0].toUpperCase()
      const other = v.slice(1) 
      v = first + other
      if (index < pathNameArr.length - 1) {
        res.push(<span key={v}>{v}</span>)
        res.push(<span key={index}>/</span>)
      } else {
        res.push(<span key={v}>{v}</span>)
      }
    })
    return res
  }
  
  function setRoute(list: RouterOptions[]): any {
    return list.map((item) => {
      if (item.children) {
        return item.children.length ? setRoute(item.children) : null;
      } else {
        return (
          <PrivateRoute
            path={item.path}
            component={item.component as React.ReactType}
            key={item.path}
          />
        );
      }
    });
  }

  const overlay = (
    <ul className="handle-list">
      <li onClick={ ()=> { window.open("https://github.com/Milu-Cat/Juiu-design-doc") }}>Github</li>
      <li onClick={ ()=> { window.open("https://www.npmjs.com/package/juiu-design") }}>Npm</li>
      <Link to='/login'>
        <li>Login Out</li>
      </Link>
    </ul>
  )
  return (
    <div className="D-layout">
      <div className="layout-left">
        <div className="header">
            <div className="logo"></div>
          <span>JUJIU ANTD</span>
        </div>
        <div className="navigation">
          <Navigation />
        </div>
      </div>
      <div className="layout-right">
        <div className="header">
          <div className="logo-contain">
            <span>Hi,Jujiu!</span>
            <Dropdown overlay={overlay}>
              <span className="admin-logo"></span>
            </Dropdown>
          </div>
        </div>
        <div className="content">
          <div className="crumbs">
            <i className="iconfont icondaohang" style={{ marginRight: "8px", fontSize: '15px' }}></i>
            {
              getCrumbs()
            }
          </div>
          <div className="views">
            <Switch>{setRoute(Router)}</Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Layout);
