import React,{FC} from 'react'
import { Route, Redirect } from 'react-router-dom'
import getLoginState from '../../utils/getLoginState'

export interface PrivateRouteOptions{
  path: string,
  key?: string,
  component: React.ReactType,
}

const PrivateRoute: FC<PrivateRouteOptions> = ({ component: Component, key, ...rest }) => {
  const routeName = window.location.pathname
  return (
    <Route {...rest} render={(props) => (
      !!getLoginState()
        ? routeName === '/' ? <Redirect  key={ key } to={{
          pathname: '/home',
          state: {from: props.location}
        }}/> : <Component {...props} key={ key }/>
        : <Redirect  key={ key } to={{
          pathname: '/login',
          state: {from: props.location}
        }}/>
    )} />
  )
} 

export default PrivateRoute