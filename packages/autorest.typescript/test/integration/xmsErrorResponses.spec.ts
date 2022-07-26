import { assert } from "chai";
import {
  AnimalNotFound,
  LinkNotFound,
  PetGetPetByIdResponse,
  PetHungryOrThirstyError,
  PetSadError,
  XmsErrorResponsesClient,
  XmsErrorResponsesClientOptionalParams
} from "./generated/xmsErrorResponses/src";
import { parseXML } from "@azure/core-xml";

describe("Integration tests for XmsErrorResponsesClient", () => {
  let client: XmsErrorResponsesClient;

  beforeEach(() => {
    let generatedClientOptions: XmsErrorResponsesClientOptionalParams = {};
    const clientOptions: XmsErrorResponsesClientOptionalParams = {
      endpoint: "http://localhost:3000",
      $host: "http://localhost:3000",
      allowInsecureConnection: true,
      retryOptions: { retryDelayInMs: 0 }
    };
    generatedClientOptions = {
      ...clientOptions,
      ...{
        deserializationOptions: {
          parseXML
        }
      }
    };

    client = new XmsErrorResponsesClient(generatedClientOptions);
  });

  it("should get an animal not found error", async () => {
    try {
      await client.pet.getPetById("coyoteUgly");
      assert.fail();
    } catch (ex) {
      const expected: AnimalNotFound = {
        someBaseProp: "problem finding animal",
        reason: "the type of animal requested is not available",
        name: "coyote",
        whatNotFound: "AnimalNotFound"
      };
      assert.deepEqual(JSON.parse(ex.message), expected);
      assert.equal(ex.statusCode, 404);
    }
  });

  it("should get an animal without error", async () => {
    const response: PetGetPetByIdResponse = await client.pet.getPetById(
      "tommy"
    );
    const expected: Partial<PetGetPetByIdResponse> = {
      name: "Tommy Tomson",
      aniType: "Dog"
    };
    assert.deepEqual(response, expected);
  });

  it("should get an animal hungry/thirsty error", async () => {
    try {
      const response: any = await client.pet.doSomething("fetch");
      assert.fail();
    } catch (ex) {
      const expected: PetHungryOrThirstyError = {
        actionResponse: "howl",
        errorType: "PetHungryOrThirstyError",
        errorMessage: "scooby is low",
        reason: "need more everything",
        hungryOrThirsty: "hungry and thirsty"
      };

      assert.deepEqual(JSON.parse(ex.message), expected);
      assert.equal(ex.statusCode, 404);
    }
  });

  it("should get an animal sad error", async () => {
    try {
      await client.pet.doSomething("jump");
      assert.fail();
    } catch (ex) {
      const expected: PetSadError = {
        actionResponse: "grrrr",
        errorType: "PetSadError",
        errorMessage: "casper aint happy",
        reason: "need more treats"
      };

      assert.deepEqual(JSON.parse(ex.message), expected);
      assert.equal(ex.statusCode, 500);
    }
  }).timeout(50000);

  it("should get a link found error", async () => {
    try {
      const response: any = await client.pet.getPetById("weirdAlYankovic");
      assert.fail();
    } catch (ex) {
      const expected: LinkNotFound = {
        someBaseProp: "problem finding pet",
        reason: "link to pet not found",
        whatSubAddress: "pet/yourpet was not found",
        whatNotFound: "InvalidResourceLink"
      };
      assert.deepEqual(JSON.parse(ex.message), expected);
      assert.equal(ex.statusCode, 404);
    }
  });

  it("should get an unexpected int error", async () => {
    try {
      const response: any = await client.pet.getPetById("alien123");
      assert.fail();
    } catch (ex) {
      assert.deepEqual(JSON.parse(ex.message), 123);
      assert.equal(ex.statusCode, 501);
    }
  });

  it("should get an bad requested string error", async () => {
    try {
      const response: any = await client.pet.getPetById("ringo");
      assert.fail();
    } catch (ex) {
      assert.deepEqual(JSON.parse(ex.message), "ringo is missing");
      assert.equal(ex.statusCode, 400);
    }
  });
});
