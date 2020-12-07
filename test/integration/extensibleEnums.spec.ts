import { assert } from "chai";
import {
  ExtensibleEnumsClient,
  PetopGetByPetIdResponse
} from "./generated/extensibleEnums/src";

describe("Integration tests for extensible enums", () => {
  let client: ExtensibleEnumsClient;

  beforeEach(() => {
    client = new ExtensibleEnumsClient();
  });

  it("sends an unexpected enum value successfully", async () => {
    const response = await client.petop.getByPetId("casper");
    const expected: Partial<PetopGetByPetIdResponse> = {
      daysOfWeek: "Weekend",
      intEnum: "2",
      name: "Casper Ghosty"
    };
    assert.deepEqual(response, expected);
    assert.equal(response._response.status, 200);
  });

  it("sends an expected enum value successfully", async () => {
    const response = await client.petop.getByPetId("tommy");
    const expected: Partial<PetopGetByPetIdResponse> = {
      daysOfWeek: "Monday",
      intEnum: "1",
      name: "Tommy Tomson"
    };
    assert.deepEqual(response, expected);
    assert.equal(response._response.status, 200);
  });

  it("sends an allowed enum value successfully", async () => {
    const response = await client.petop.getByPetId("scooby");
    const expected: Partial<PetopGetByPetIdResponse> = {
      daysOfWeek: "Thursday",
      intEnum: "2.1",
      name: "Scooby Scarface"
    };
    assert.deepEqual(response, expected);
    assert.equal(response._response.status, 200);
  });

  it("sends and receives enum value successfully", async () => {
    const expected: Partial<PetopGetByPetIdResponse> = {
      name: "Retriever",
      intEnum: "3",
      daysOfWeek: "Sunday"
    };

    const response = await client.petop.addPet({
      petParam: {
        name: "Retriever",
        intEnum: "3",
        daysOfWeek: "Sunday"
      }
    });
    assert.deepEqual(response, expected);
    assert.equal(response._response.status, 200);
  });
});
