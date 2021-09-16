import { assert } from "chai";
import { EnumValuesClient } from "./generated/enumvalues/src";
import { createHttpHeaders } from "@azure/core-rest-pipeline";

/**
 * Returns an interface that omits the _response field.
 * This is useful when doing assert.deepEqual since _response
 * is not enumerable, but deepEqual still does type checking for it.
 */
type RemoveResponse<T> = Omit<T, "_response">;

describe("EnumValuesClient", () => {
  let client: EnumValuesClient;

  beforeEach(() => {});

  describe("#InspectCall", () => {
    it("Verify that non required parameters are not present in the call", async () => {
      client = new EnumValuesClient("http://usethisone.com", {
        httpClient: {
          sendRequest: req => {
            assert.doesNotHaveAnyKeys(req.headers, [
              "encryptionAlgorithm",
              "encryptionAlgorithmWithTwoValues"
            ]);
            return Promise.resolve({
              status: 200,
              headers: createHttpHeaders(),
              request: req
            });
          }
        },
        endpoint: "http://usethisone.com"
      });

      await client.blob.download({
        encryptionAlgorithmRequiredWithTwoValues: "AES256"
      });
    });
  });
});
