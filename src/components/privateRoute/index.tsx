import React,{FC} from 'react'
import { Route, Redirect, } from 'react-router-dom'
import getLoginState from '../../utils/getLoginState'

interface PrivateRouteOptions{
  path: string,
  key?: string,
  component?: React.ReactType,
}

const PrivateRoute: FC<PrivateRouteOptions> = ({ component:Component, ...rest }) => {
  // const Component = component
  return (
    <Route {...rest} render={(props) => (
      !!getLoginState()
        ? Component && <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: {from: props.location}
        }}/>
    )} />
  )
} 

export default PrivateRoute