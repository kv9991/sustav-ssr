import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render = () => {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Index</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </nav>
          <Route
            path="/"
            exact
            component={Loadable({
              loader: () => import("./index"),
              loading: () => "Загрузка"
            })}
          />
          <Route
            path="/about"
            exact
            component={Loadable({
              loader: () => import("./about"),
              loading: () => "Загрузка"
            })}
          />
        </div>
      </Router>
    );
  };
}

export default App;
