import { assert } from "chai";
import { BatchServiceClient } from "./generated/batchService/src/batchServiceClient";
import { TokenCredential, GetTokenOptions } from "@azure/core-http";

describe.only("BatchService", () => {
  it("should instantiate new client", () => {
    const dummyToken = "dummy12321343423";
    const expiresOn = 1000;
    const credentials: TokenCredential = {
      getToken: async (
        _scopes: string | string[],
        _options?: GetTokenOptions
      ) => {
        return {
          token: dummyToken,
          expiresOnTimestamp: expiresOn
        };
      }
    };
    const client = new BatchServiceClient(credentials, "url");

    assert.isDefined(client);
  });
});
