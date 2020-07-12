import React, { Component } from "react";

export class Reports extends Component {
  render() {
    return (
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
                48
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
                23/11/2020
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reports;
