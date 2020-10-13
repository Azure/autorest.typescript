import { expect } from "chai";
import { ExtensibleEnumsClient } from "./generated/extensibleEnums/src";

describe("Integration tests for extensible enums", () => {
  let client: ExtensibleEnumsClient;

  beforeEach(() => {
    client = new ExtensibleEnumsClient();
  });

  it("sends an unexpected enum value successfully", async () => {
    const response = await client.pet.getByPetId("casper");
    expect(response).to.deep.equal({
      daysOfWeek: "Weekend",
      intEnum: "2",
      name: "Casper Ghosty"
    });
    expect(response._response.status).to.equal(200, `Unexpected status code.`);
  });

  it("sends an expected enum value successfully", async () => {
    const response = await client.pet.getByPetId("tommy");
    expect(response).to.deep.equal({
      daysOfWeek: "Monday",
      intEnum: "1",
      name: "Tommy Tomson"
    });
    expect(response._response.status).to.equal(200, `Unexpected status code.`);
  });

  it("sends an allowed enum value successfully", async () => {
    const response = await client.pet.getByPetId("scooby");
    expect(response).to.deep.equal({
      daysOfWeek: "Thursday",
      intEnum: "2.1",
      name: "Scooby Scarface"
    });
    expect(response._response.status).to.equal(200, `Unexpected status code.`);
  });

  it("sends and receives enum value successfully", async () => {
    const response = await client.pet.addPet({
      petParam: {
        name: "Retriever",
        intEnum: "3",
        daysOfWeek: "Sunday"
      }
    });
    expect(response).to.deep.equal({
      name: "Retriever",
      intEnum: "3",
      daysOfWeek: "Sunday"
    });
    expect(response._response.status).to.equal(200, `Unexpected status code.`);
  });
});
