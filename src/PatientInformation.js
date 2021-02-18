import React, { Component } from "react";
import DemographicInfo from "./DemographicInfo";
import { smartHealthService } from "./smartHealthService";

export default class PatientInformation extends Component {
  constructor() {
    super();

    this.state = { conditionData: {}, patientData: {} };
  }

  componentDidMount() {
    const service = new smartHealthService();
    // service.getPatient(console.log);
    service.getPatient("e7c6294d-9edb-4cd1-a1a1-2c39867a1d23", this.loadPatientData);
    service.getConditions("e7c6294d-9edb-4cd1-a1a1-2c39867a1d23", this.loadConditionData);
  }

  loadPatientData = (patientData) => {
    this.setState({ patientData });
  };

  loadConditionData = (data) => {
    const conditionData = data.entry.map((entry) => entry.resource);

    this.setState({ conditionData });
  };

  get name() {
    const { name } = this.state.patientData;

    const firstListed = name?.[0] || "";
    const first = firstListed.given?.reduce((string, name) => string + `${name} `, "");

    return `${first}${firstListed.family}`;
  }

  render() {
    const { patientData } = this.state;
    console.log("state", this.state);
    return (
      <div className="patient-information">
        <DemographicInfo
          birthday={patientData.birthDate}
          gender={patientData.gender}
          name={this.name}
        />
      </div>
    );
  }
}
