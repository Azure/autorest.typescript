import { AppConfigurationClient } from "./generated/appconfiguration/src";
import { assert } from "chai";

describe("Integration tests for AppConfiguration", () => {
  let client: AppConfigurationClient;

  it("should create a client successfully", async () => {
    const endpoint: string = "sampleEndPoint";
    client = new AppConfigurationClient(endpoint);
    assert.notEqual(client, null);
  });
});
