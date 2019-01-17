import React from "react";
import { Link } from "react-router-dom";

class Layout extends React.Component {
  render = () => {
    const { children } = this.props;

    return (
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
        {children}
      </div>
    );
  };
}

export default Layout;
