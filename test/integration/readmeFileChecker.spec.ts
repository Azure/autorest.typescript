import { KeyVaultClient } from "./generated/readmeFileChecker/src/";
import { assert } from "chai";

describe("Integration tests for Readme File Checker", () => {
  let client: KeyVaultClient;

  it("should create a client successfully", async () => {
    const endpoint: string = "sampleEndPoint";
    client = new KeyVaultClient(endpoint);
    assert.notEqual(client, null);
  });
});
