import FHIR from "fhirclient";

export class smartHealthService {
  getPatient = (id, retrieveData) => {
    const client = FHIR.client("https://r3.smarthealthit.org");
    client.request(`Patient/${id}`).then(retrieveData).catch(console.error);
  };
}

