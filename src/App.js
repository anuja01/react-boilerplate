import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { routes } from "./router";

function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map((route, i) => (
            < RouteTo key={i} {...route} />
          ))
        }
      </Switch>
    </Router>
  );
}

const RouteTo = (route) => {
  console.log('route: ', route)
  return (
    <Route
      path={route.path}
    >
      <route.component routes={route.routes} />
    </Route>
  )
}


export default App;
