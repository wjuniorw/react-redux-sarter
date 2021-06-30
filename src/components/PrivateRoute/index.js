import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogedIn } from '../../services/verifyToken'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLogedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

export default PrivateRoute
