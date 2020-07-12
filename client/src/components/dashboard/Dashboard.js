import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./Dashboard.css";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import Reports from "../reports/Reports";
import CheckupForm from "../checkupForm/CheckupForm";
import PrivateRoute from "../private-route/PrivateRoute";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <div>
          <header>
            {/* TOPNAV */}

            <div className="navbar-fixed">
              <nav className="red darken-1">
                <div className="container">
                  <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">
                      CoviDoc
                    </a>
                    <a
                      href="#"
                      data-target="nav-mobile"
                      className="sidenav-trigger"
                    >
                      <i className="material-icons">menu</i>
                    </a>
                    <ul className="right">
                      <button
                        style={{
                          width: "150px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                        }}
                        onClick={this.onLogoutClick}
                        className="btn btn-medium waves-effect waves-light hoverable blue accent-3"
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            {/* END_TOPNAV */}
            {/* SIDEBAR */}
            <ul id="nav-mobile" className="sidenav sidenav-fixed">
              <Link to={"/dashboard/home"}>
                <li className="bold">
                  <a className="waves-effect waves-teal">Home</a>
                </li>
              </Link>
              <Link to={"/dashboard/profile"}>
                <li className="bold">
                  <a className="waves-effect waves-teal">Profile</a>
                </li>
              </Link>
              <Link to={"/dashboard/reports"}>
                <li className="bold">
                  <a className="waves-effect waves-teal">Reports</a>
                </li>
              </Link>
              <Link to={"/dashboard/checkup-form"}>
                <li className="bold">
                  <a className="waves-effect waves-teal">Checkup Form</a>
                </li>
              </Link>

              <div className="logo">CoviDoc</div>
            </ul>
            {/* END_SIDEBAR */}
          </header>
          {/* END_NAVBAR */}
          {/* MAIN */}
          <main>
            <Switch>
              <PrivateRoute path="/dashboard/home" component={Home} />
              <PrivateRoute path="/dashboard/profile" component={Profile} />
              <PrivateRoute path="/dashboard/reports" component={Reports} />
              <PrivateRoute
                path="/dashboard/checkup-form"
                component={CheckupForm}
              />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
