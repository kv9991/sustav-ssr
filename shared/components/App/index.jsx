import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import Layout from "../Layout";
import { initStore } from "../../store";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialData: {
        ...this.getInitialData()
      }
    };
  }

  getInitialData = () => {
    if (typeof window == "undefined") {
      return {};
    }

    return window.INITIAL_DATA;
  };

  render = () => {
    const { children, router } = this.props;
    const { initialData } = this.state;

    return (
      <Provider store={initStore(initialData)}>
        {router(<Layout>{children}</Layout>)}
      </Provider>
    );
  };
}

App.propTypes = {
  router: PropTypes.any.isRequired
};

export default App;
