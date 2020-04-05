import React from 'react'
import { View } from 'react-native'

import Estimates from './screens/Estimates'
import Estimate from './screens/Estimate'

import { Route, Router, Switch } from './Router'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Estimates} />
        <Route exact path="/esitmates/:id" component={Estimate} />
      </Switch>
    </Router>
  )
}

export default Routes
