import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";
import { routes, protectedRoutes } from "./router";

function App() {
  const [isSecure, setIsSecure] = React.useState(false)
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <Switch>
          {
            protectedRoutes.map((route, i) => {
              return (
                < PrivateRouteTo
                  key={i}
                  isSecure={isSecure}
                  {...route}>
                </ PrivateRouteTo>)
            })
          }
          {
            routes.map((route, i) => (
              < RouteTo key={i} {...route} />
            ))
          }
        </Switch>
      </div>
    </Router>
  );
}

// public access routes
const RouteTo = (route) => {
  return (
    <Route
      path={route.path}
    >
      <route.component routes={route.routes} />
    </Route>
  )
}

// secured routes
function PrivateRouteTo({ component: Component, isSecure, route, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        // if not authenticated then move to login page, else show children
        isSecure ? (
          <Component />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}


export default App;
