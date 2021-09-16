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
      client = new EnumValuesClient("https://microsoft.com/", {
        httpClient: {
          sendRequest: req => {
            console.log(req.headers.toJSON());
            assert.doesNotHaveAnyKeys(req.headers, [
              "encryptionAlgorithm",
              "encryptionAlgorithmWithTwoValues"
            ]);
            // is there a way to stop the call?
            Promise.resolve({
              status: 200,
              headers: createHttpHeaders(),
              request: req
            });
            return {} as any;
          }
        }
      });

      await client.blob.download({
        encryptionAlgorithmRequiredWithTwoValues: "AES256"
      });
    });
  });
});
