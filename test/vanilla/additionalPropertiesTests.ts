import * as assert from "assert";
import { AdditionalPropertiesClient } from "./generated/AdditionalProperties/additionalPropertiesClient";

describe('typescript', function () {
  describe('Swagger Additional Properties BAT', function () {
    const client = new AdditionalPropertiesClient();
    it("should handle additionalProperties: true", async function () {
      const response = await client.pets.createAPTrue({
        id: 1,
        name: 'Puppy',
        birthdate: '2017-12-13T02:29:51Z',
        complexProperty: {
          color: 'Red'
        }
      });

      assert(response.status);
    });

    it("should handle subtypes of types with additionalProperties: true", async function () {
      const response = await client.pets.createCatAPTrue({
        id: 1,
        name: 'Lisa',
        friendly: true,
        birthdate: '2017-12-13T02:29:51Z',
        complexProperty: {
          color: 'Red'
        }
      });

      assert(response.status);
    });

    it("should handle additionalProperties of type object", async function () {
      const response = await client.pets.createAPObject({
        id: 2,
        name: 'Hira',
        siblings: [
          {
            id: 1,
            name: 'Puppy',
            birthdate: '2017-12-13T02:29:51Z',
            complexProperty: {
              color: 'Red'
            }
          }
        ],
        picture: '//////4='
      });

      assert(response.status);
    });

    it("should handle additionalProperties of type string", async function () {
      const response = await client.pets.createAPString({
        id: 3,
        name: 'Tommy',
        color: 'red',
        weight: "10 kg",
        city: "Bombay"
      });

      assert(response.status);
    });

    it("should handle additionalProperties in properties", async function () {
      const response = await client.pets.createAPInProperties({
        id: 4,
        name: 'Bunny',
        additionalProperties: {
          height: 5.61,
          weight: 599,
          footsize: 11.5
        }
      });

      assert(response.status);
    });

    it("should handle string additionalProperties in properties", async function () {
      const response = await client.pets.createAPInPropertiesWithAPString({
        id: 5,
        name: 'Funny',
        odatalocation: 'westus',
        additionalProperties1: {
          height: 5.61,
          weight: 599,
          footsize: 11.5,
        },
        color: 'red',
        city: 'Seattle',
        food: 'tikka masala'
      });

      assert(response.status);
    });
  });
});