import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes";

class Routes extends React.Component {
  render = () => {
    return (
      <Switch>
        {routes.map(route => (
          <Route
            key={route.key}
            path={route.path}
            exact
            component={route.comp || route.loading}
          />
        ))}
      </Switch>
    );
  };
}

export default Routes;
