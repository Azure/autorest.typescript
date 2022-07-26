import { ODataDiscriminatorClient } from "./generated/odataDiscriminator/src";
import { assert } from "chai";

describe("Integration tests for OData-Discriminator", () => {
  let client: ODataDiscriminatorClient;

  it("should create a client successfully", async () => {
    client = new ODataDiscriminatorClient("SampleHost", "One");
    assert.notEqual(client, null);
  });
});
