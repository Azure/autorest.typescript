import { IoTSpacesClient } from "./generated/iotspaces/src";
import { TokenCredential } from "@azure/core-auth";
import { assert } from "chai";

describe("Integration tests for IoTSpaces", () => {
  it("should create a client successfully", async () => {
    const expectedScopes = [
      "https://microsoft.com/.default",
      "http://microsoft.com/.default"
    ];

    const mockCredential: TokenCredential = {
      getToken: async scopes => {
        assert.deepEqual(scopes, expectedScopes);
        return {
          token: "test-token",
          expiresOnTimestamp: 111111
        };
      }
    };

    const client: IoTSpacesClient = new IoTSpacesClient(mockCredential, {
      credentialScopes: expectedScopes
    });

    assert.notEqual(client, null);
  });
});
