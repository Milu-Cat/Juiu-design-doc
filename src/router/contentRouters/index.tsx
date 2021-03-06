import React, { FC } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'

const Button = ()=> import('../../views/button/index')

const ContentRouter: FC = (props) => {
  return (
    <div className="content">
      <Switch>
      </Switch>
    </div>
  )
}

export default withRouter(ContentRouter)