import React, { Component } from "react";
import Select from "react-select";
// import { colourOptions } from "../data";

class CheckupForm extends Component {
  state = {
    age: undefined,
    gender: undefined,
    pincode: undefined,
    intTravel: undefined,
    hotspot: undefined,
    nearPatient: undefined,
    liveFacility: undefined,
    carAccess: undefined,
    conditionsCount: undefined,
    symptomsCount: undefined,
    selectedOptions: [],
    fingerResult: undefined,
    xrayResult: undefined,
    finalScore: undefined,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(e.target.id, e.target.value);
  };

  handleChangeSelectSymptom = (selectedOptions) => {
    this.setState({
      symptomsCount: selectedOptions ? selectedOptions.length : 0,
    });
    console.log(selectedOptions ? selectedOptions.length : 0);
  };
  handleChangeSelectCondition = (selectedOptions) => {
    this.setState({
      conditionsCount: selectedOptions ? selectedOptions.length : 0,
    });
    console.log(selectedOptions ? selectedOptions.length : 0);
  };
  handleToggleChange1 = (e) => {
    this.setState({
      [e.target.id]: !this.state.intTravel,
    });
    console.log(this.state.intTravel);
  };
  handleToggleChange2 = (e) => {
    this.setState({
      [e.target.id]: !this.state.hotspot,
    });
    console.log(this.state.hotspot);
  };
  handleToggleChange3 = (e) => {
    this.setState({
      [e.target.id]: !this.state.nearPatient,
    });
    console.log(this.state.nearPatient);
  };
  handleToggleChange4 = (e) => {
    this.setState({
      [e.target.id]: !this.state.liveFacility,
    });
    console.log(this.state.liveFacility);
  };
  handleToggleChange5 = (e) => {
    this.setState({
      [e.target.id]: !this.state.carAccess,
    });
    console.log(this.state.carAccess);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    var finalScore1 = this.CalcPoints(
      this.state.conditionsCount,
      this.state.intTravel,
      this.state.hotspot,
      this.state.nearPatient,
      this.state.liveFacility,
      this.state.carAccess,
      this.state.symptomsCount,
      this.state.fingerResult,
      this.state.xrayResult
    );
    this.setState({ finalScore: finalScore1 });
    console.log(finalScore1);
  };
  CalcPoints = (
    preExist,
    travel,
    hotspot,
    expocovid,
    workcare,
    car,
    symptoms,
    finger,
    xray
  ) => {
    var score = 0;
    var cnt1 = preExist.length;
    var cnt2 = symptoms.length;

    if (cnt1 === 1) {
      score += 1;
    }
    if (cnt1 === 2) {
      score += 3;
    }
    if (cnt1 >= 3) {
      score += 5;
    }

    if (travel) {
      score += 5;
    }

    if (hotspot) {
      score += 2;
    }

    if (expocovid) {
      score += 4;
    }

    if (workcare) {
      score += 5;
    }

    if (cnt2 === 1) {
      score += 1;
    }
    if (cnt2 === 2) {
      score += 3;
    }
    if (cnt2 >= 3) {
      score += 5;
    }

    if (finger >= 95) {
      score += 0;
    } else if (finger >= 91) {
      score += 1;
    } else if (finger >= 86) {
      score += 2;
    } else {
      score += 3;
    }

    if (xray) {
      score = 25;
    }

    return (score / 31) * 100;
  };

  render() {
    const optionsConditions = [
      {
        value: "Asthma or Chronic Lung Disease",
        label: "Asthma or Chronic Lung Disease",
      },
      { value: "Pregnancy", label: "Pregnancy" },
      {
        value: "Diabetes with Complication",
        label: "Diabetes with Complication",
      },
      {
        value: "Harder To Cough",
        label: "Harder To Cough",
      },
      {
        value: "Kidney Failure/Dialysis",
        label: "Kidney Failure/Dialysis",
      },
      {
        value: "Weakened Immune System",
        label: "Weakened Immune System",
      },
      {
        value: "Congestive Heart Failure",
        label: "Congestive Heart Failure",
      },
      {
        value: "Extreme Obesity",
        label: "Extreme Obesity",
      },
    ];
    const optionsSymptoms = [
      {
        value: "Fever, Chills or Sweating",
        label: "Fever, Chills or Sweating",
      },
      { value: "Difficulty in Breathing", label: "Difficulty in Breathing" },
      { value: "New or Worsening Cough", label: "New or Worsening Cough" },
      { value: "Sore Throat", label: "Sore Throat" },
      {
        value: "Aching throughout the body",
        label: "Aching throughout the body",
      },
      { value: "Vomiting or Diarrhea", label: "Vomiting or Diarrhea" },
    ];
    return (
      <div className="container">
        <form
          style={{ margin: "100px", marginTop: "30px" }}
          onSubmit={this.handleSubmit}
          className="white"
        >
          <h5 className="grey-text text-darken-3">Add Report</h5>

          <div className="input-field">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" onChange={this.handleChange} />
          </div>

          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            className="browser-default"
            onChange={this.handleChange}
          >
            <option value="" disabled selected>
              Choose your option
            </option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>

          <div className="input-field">
            <label htmlFor="pincode">Postal Code</label>
            <input type="number" id="pincode" onChange={this.handleChange} />
          </div>

          <p>
            <label>
              <input
                id="intTravel"
                type="checkbox"
                onChange={this.handleToggleChange1}
              />
              <span>
                Have You Traveled Internationally in the Last 14 days?
              </span>
            </label>
          </p>
          <p>
            <label>
              <input
                id="hotspot"
                type="checkbox"
                onChange={this.handleToggleChange2}
              />
              <span>Have You been in any hotspot in last 14 days?</span>
            </label>
          </p>
          <p>
            <label>
              <input
                id="nearPatient"
                type="checkbox"
                onChange={this.handleToggleChange3}
              />
              <span>
                Have You been exposed to any Covid patient in last 14 days?
              </span>
            </label>
          </p>
          <p>
            <label>
              <input
                id="liveFacility"
                type="checkbox"
                onChange={this.handleToggleChange4}
              />
              <span>Do you live or work in care facility?</span>
            </label>
          </p>
          <p>
            <label>
              <input
                id="carAccess"
                type="checkbox"
                onChange={this.handleToggleChange5}
              />
              <span>Do you have access to Car?</span>
            </label>
          </p>

          <Select
            isMulti
            placeholder="Pre-existing Conditions"
            id="conditions"
            options={optionsConditions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={this.handleChangeSelectCondition}
          />

          <br />
          <Select
            isMulti
            placeholder="Symptoms"
            id="symptoms"
            options={optionsSymptoms}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={this.handleChangeSelectSymptom}
          />

          <br />

          <form action="#">
            <div className="file-field input-field">
              <div className="btn btn-small">
                <span>Xray Image Upload</span>
                <input type="file" />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
          </form>
          <br />
          <form action="#">
            <div className="file-field input-field">
              <div className="btn btn-small">
                <span>Finger Video Upload</span>
                <input type="file" />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
          </form>

          <div
            className="input-field"
            style={{
              marginLeft: "400px",
              marginTop: "50px",
            }}
          >
            <button className="btn btn-large pink lighten-1 z-depth-0">
              Submit Report
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckupForm;
