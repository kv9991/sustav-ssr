import React from "react";
import Loadable from "react-loadable";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes";

class Routes extends React.Component {
  render = () => {
    return (
      <Switch>
        {routes.map(props => (
          <Route
            key={props.path}
            path={props.path}
            exact={props.exact}
            component={Loadable({
              loader: props.loader,
              loading: props.loading
            })}
          />
        ))}
      </Switch>
    );
  };
}

export default Routes;
