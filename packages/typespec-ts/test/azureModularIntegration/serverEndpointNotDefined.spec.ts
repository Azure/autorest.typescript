import { assert } from "chai";
import { NotDefinedClient } from "./generated/server/endpoint/not-defined/src/index.js";
describe("NotDefined Server Endpoint Client", () => {
  let client: NotDefinedClient;

  beforeEach(() => {
    client = new NotDefinedClient("http://localhost:3000", {
      endpoint: "http://localhost:3006",
      allowInsecureConnection: true
    });
  });

  it("should work with not defined endpoint", async () => {
    const result = await client.valid();
    assert.isUndefined(result);
  });
});
