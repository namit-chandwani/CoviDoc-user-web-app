import React, { Component } from "react";
import axios from "axios";
export class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: undefined,
    };
  }
  componentDidMount() {
    axios
      .get("/api/reports/")
      .then((res) => this.setState({ reports: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">
            <div
              className="card #ffd54f amber lighten-2"
              style={{
                marginLeft: "200px",
                width: "700px",
              }}
            >
              <div className="card-content gray-text">
                <span className="card-title">Report Score:</span>
                <p
                  className="btn-large"
                  style={{
                    marginLeft: "200px",
                    fontWeight: "bold",
                    fontSize: "2em",
                    color: "yellow",
                    cursor: "default",
                  }}
                >
                  43.71
                </p>
              </div>
              <div className="card-action">
                Date created:
                <span
                  style={{
                    marginLeft: "200px",
                    fontWeight: "bold",
                    fontSize: "1.2em",
                    color: "gray",
                  }}
                >
                  12/07/2020
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <div
              className="card #ffd54f amber lighten-2"
              style={{
                marginLeft: "200px",
                width: "700px",
              }}
            >
              <div className="card-content gray-text">
                <span className="card-title">Report Score:</span>
                <p
                  className="btn-large"
                  style={{
                    marginLeft: "200px",
                    fontWeight: "bold",
                    fontSize: "2em",
                    color: "yellow",
                    cursor: "default",
                  }}
                >
                  37.62
                </p>
              </div>
              <div className="card-action">
                Date created:
                <span
                  style={{
                    marginLeft: "200px",
                    fontWeight: "bold",
                    fontSize: "1.2em",
                    color: "gray",
                  }}
                >
                  11/07/2020
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <div
              className="card #ffd54f amber lighten-2"
              style={{
                marginLeft: "200px",
                width: "700px",
              }}
            >
              <div className="card-content gray-text">
                <span className="card-title">Report Score:</span>
                <p
                  className="btn-large"
                  style={{
                    marginLeft: "200px",
                    fontWeight: "bold",
                    fontSize: "2em",
                    color: "yellow",
                    cursor: "default",
                  }}
                >
                  29.32
                </p>
              </div>
              <div className="card-action">
                Date created:
                <span
                  style={{
                    marginLeft: "200px",
                    fontWeight: "bold",
                    fontSize: "1.2em",
                    color: "gray",
                  }}
                >
                  10/07/2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reports;
