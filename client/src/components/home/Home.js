import React, { Component } from "react";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.onSubmitReport = this.onSubmitReport.bind(this);

    this.state = { text: "Send Latest Report" };
  }
  onSubmitReport = () => {
    //Insert Submit code
    this.setState({ text: "Report Sent" });
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
              src="https://www.lilavatihospital.com/uploads/home_banner/InnerBanner-8459-7861-1882.jpg"
            />
          </div>
          <div className="card-content">
            <span
              className="card-title activator grey-text text-darken-4"
              style={{ fontWeight: "500" }}
            >
              Lilavati Hospital And Research Centre
              <i className="material-icons right">more_vert</i>
            </span>
            <p>
              <button
                onClick={this.onSubmitReport}
                className="btn pink lighten-1 z-depth-0"
                style={{ marginLeft: "400px", marginTop: "5px" }}
              >
                {this.state.text}
              </button>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Lilavati Hospital And Research Centre
              <i className="material-icons right">close</i>
            </span>
            <p>Mumbai, Maharashtra</p>
          </div>
        </div>
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
              src="data:image/jpeg;base64,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"
            />
          </div>
          <div className="card-content">
            <span
              className="card-title activator grey-text text-darken-4"
              style={{ fontWeight: "500" }}
            >
              Holy Family Multispeciality Hospital Bandra
              <i className="material-icons right">more_vert</i>
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
              Holy Family Multispeciality Hospital Bandra
              <i className="material-icons right">close</i>
            </span>
            <p>Mumbai, Maharashtra</p>
          </div>
        </div>
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
              src="https://www.tour2india4health.com/breach-candy-hospital-india/images/breach-candy-hospital-building.png"
            />
          </div>
          <div className="card-content">
            <span
              className="card-title activator grey-text text-darken-4"
              style={{ fontWeight: "500" }}
            >
              Bhabha Hospital<i className="material-icons right">more_vert</i>
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
              Bhabha Hospital<i className="material-icons right">close</i>
            </span>
            <p>Mumbai, Maharashtra</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
