import FHIR from "fhirclient";

export class smartHealthService {
  getPatient = (id, retrieveData, registerError) => {
    const client = FHIR.client("https://r3.smarthealthit.org");
    client
      .request(`Patient/${id}`)
      .then((patientData) => {
        retrieveData({ patientData });
        this.getConditions(id, retrieveData, registerError);
      })
      .catch(registerError);
  };

  getConditions = (patientId, retrieveData, registerError) => {
    const client = FHIR.client("https://r3.smarthealthit.org");
    client
      .request(`Condition?subject=${patientId}`)
      .then((conditionData) => retrieveData({ conditionData }))
      .catch(registerError);
  };
}

// getConditions = (patient) =>
//smart-7321938
//"Condition?patient=smart-7321938"

//"235652"
