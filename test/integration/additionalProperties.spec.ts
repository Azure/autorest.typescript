import { assert } from "chai";
import {
  AdditionalPropertiesClient,
  PetAPTrue,
  PetsCreateAPTrueResponse,
  CatAPTrue,
  PetsCreateCatAPTrueResponse,
  PetAPObject,
  PetsCreateAPObjectResponse,
  PetAPString,
  PetsCreateAPStringResponse,
  PetAPInProperties,
  PetsCreateAPInPropertiesResponse,
  PetAPInPropertiesWithAPString,
  PetsCreateAPInPropertiesWithAPStringResponse
} from "./generated/additionalProperties/src";
import { responseStatusChecker } from "../utils/responseStatusChecker";

/**
 * Returns an interface that omits the _response field.
 * This is useful when doing assert.deepEqual since _response
 * is not enumerable, but deepEqual still does type checking for it.
 */
type RemoveResponse<T> = Omit<T, "_response">;

describe("AdditionalPropertiesClient", () => {
  let client: AdditionalPropertiesClient;

  beforeEach(() => {
    client = new AdditionalPropertiesClient({ allowInsecureConnection: true });
  });

  describe("#createAPTrue", () => {
    it("returns an object with additional, untyped properties", async () => {
      const params: PetAPTrue = {
        id: 1,
        name: "Puppy",
        birthdate: "2017-12-13T02:29:51Z",
        complexProperty: {
          color: "Red"
        }
      };
      const result = await client.pets.createAPTrue(
        params,
        responseStatusChecker
      );

      assert.deepEqual(result as RemoveResponse<PetsCreateAPTrueResponse>, {
        ...params,
        status: true
      });
    });
  });

  describe("#createCatAPTrue", () => {
    it("returns an object with additional, untyped properties", async () => {
      const params: CatAPTrue = {
        id: 1,
        name: "Lisa",
        friendly: true,
        birthdate: "2017-12-13T02:29:51Z",
        complexProperty: {
          color: "Red"
        }
      };
      const result = await client.pets.createCatAPTrue(
        params,
        responseStatusChecker
      );

      assert.deepEqual(result as RemoveResponse<PetsCreateCatAPTrueResponse>, {
        ...params,
        status: true
      });
    });
  });

  describe("#createAPObject", () => {
    it("returns an object with additional, untyped properties", async () => {
      const params: PetAPObject = {
        id: 2,
        name: "Hira",
        siblings: [
          {
            id: 1,
            name: "Puppy",
            birthdate: "2017-12-13T02:29:51Z",
            complexProperty: {
              color: "Red"
            }
          }
        ],
        picture: "//////4="
      };
      const result = await client.pets.createAPObject(
        params,
        responseStatusChecker
      );

      assert.deepEqual(result as RemoveResponse<PetsCreateAPObjectResponse>, {
        ...params,
        status: true
      });
    });
  });

  describe("#createAPString", () => {
    it("returns an object with additional, untyped properties", async () => {
      const params: PetAPString = {
        id: 3,
        name: "Tommy",
        color: "red",
        weight: "10 kg",
        city: "Bombay"
      };
      const result = await client.pets.createAPString(
        params,
        responseStatusChecker
      );

      assert.deepEqual(result as RemoveResponse<PetsCreateAPStringResponse>, {
        ...params,
        status: true
      });
    });
  });

  describe("#createAPInProperties", () => {
    it("returns an object with additional, untyped properties", async () => {
      const params: PetAPInProperties = {
        id: 4,
        name: "Bunny",
        additionalProperties: {
          height: 5.61,
          weight: 599,
          footsize: 11.5
        }
      };
      const result = await client.pets.createAPInProperties(
        params,
        responseStatusChecker
      );

      assert.deepEqual(
        result as RemoveResponse<PetsCreateAPInPropertiesResponse>,
        {
          ...params,
          status: true
        }
      );
    });
  });

  describe("#createAPInPropertiesWithAPString", () => {
    it("returns an object with additional, untyped properties", async () => {
      const params: PetAPInPropertiesWithAPString = {
        id: 5,
        name: "Funny",
        odataLocation: "westus",
        additionalProperties: {
          height: 5.61,
          weight: 599,
          footsize: 11.5
        },
        color: "red",
        city: "Seattle",
        food: "tikka masala"
      };
      const result = await client.pets.createAPInPropertiesWithAPString(
        params,
        {
          onResponse: response => {
            assert.equal(response.status, 200, "Unexpected status code.");
          }
        }
      );

      assert.deepEqual(
        result as RemoveResponse<PetsCreateAPInPropertiesWithAPStringResponse>,
        {
          ...params,
          status: true
        }
      );
    });
  });
});
