import React, { Component } from "react";

import CheatSheet from "./CheatSheet";
import InfoChart from "./InfoChart";
import Search from "./Search";

import { smartHealthService } from "./smartHealthService";

export default class PatientInformation extends Component {
  constructor() {
    super();

    this.service = new smartHealthService();
    this.state = { conditionData: [], patientData: undefined, searchValue: "", showError: false };
  }

  searchPatientId = (id) => {
    this.service.getPatient(id, this.loadData, this.registerError);
  };

  loadData = ({ conditionData, patientData }) => {
    if (patientData) {
      this.loadPatientData(patientData);
    }
    if (conditionData) {
      this.loadConditionData(conditionData);
    }
  };

  loadPatientData = (data) => {
    const patientData = {
      birthday: data.birthDate,
      gender: data.gender,
      name: this.patientName(data),
    };

    this.setState({ patientData, showError: false });
  };

  loadConditionData = (data) => {
    const conditions = data.entry || [];
    const conditionData = conditions.map(({ resource }) => ({
      name: resource.code.text,
      assertedDate: resource.assertedDate,
      link: `https://pubmed.ncbi.nlm.nih.gov/?term=${resource.code.text}`,
    }));

    this.setState({ conditionData, showError: false });
  };

  registerError = () => {
    this.setState({ showError: true });
  };

  patientName = ({ name }) => {
    const firstListed = name?.[0] || "";
    const first = firstListed.given?.reduce((string, name) => string + `${name} `, "");

    return `${first}${firstListed.family}`;
  };

  handleChange = ({ target }) => {
    this.setState({ searchValue: target.value.trim() });
  };

  handleClick = () => {
    const { searchValue } = this.state;

    if (searchValue) {
      this.searchPatientId(searchValue);
    }
  };

  handleKeyPress = (event) => {
    const { searchValue } = this.state;

    if (event.key === "Enter" && searchValue) {
      this.searchPatientId(searchValue);
    }
  };

  render() {
    const { conditionData, patientData, searchValue, showError } = this.state;

    return (
      <div className="patient-information">
        <Search
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleKeyPress={this.handleKeyPress}
          showError={showError}
          value={searchValue}
        />
        <InfoChart demographicInfo={patientData} conditions={conditionData} />
        <CheatSheet />
      </div>
    );
  }
}
