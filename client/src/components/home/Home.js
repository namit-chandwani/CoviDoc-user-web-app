import React, { Component } from "react";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.onSubmitReport = this.onSubmitReport.bind(this);

    this.state = {};
  }
  onSubmitReport = () => {
    //Insert Submit code
  };
  render() {
    return (
      <div className="container">
        <h4 className="center">Nearby Hospitals matching your criteria..</h4>
        <div
          className="card sticky-action medium"
          style={{
            margin: "100px",
            marginTop: "30px",
            height: "300px",
            width: "1000px",
          }}
        >
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src="https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg"
            />
          </div>
          <div className="card-content">
            <span
              className="card-title activator grey-text text-darken-4"
              style={{ fontWeight: "500" }}
            >
              Lilavati Hospital<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <button
                onClick={this.onSubmitReport}
                className="btn pink lighten-1 z-depth-0"
                style={{ marginLeft: "400px", marginTop: "5px" }}
              >
                Send Latest Report
              </button>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Lilavati Hospital<i className="material-icons right">close</i>
            </span>
            <p>Mumbai, Maharashtra</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
