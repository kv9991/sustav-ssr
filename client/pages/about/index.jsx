import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./styles.scss";

class AboutPage extends React.Component {
  render = () => {
    return (
      <div className="about-page-wrapper">
        {JSON.stringify(this.props.test)}
      </div>
    );
  };
}

AboutPage.propTypes = {
  test: PropTypes.object.isRequired
};

const mapStateToProps = ({ test }) => ({
  test
});

export default connect(mapStateToProps)(AboutPage);
