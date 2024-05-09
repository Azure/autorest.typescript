import { assert } from "chai";
import { NotDefinedClient } from "./generated/server/endpoint/not-defined/src/index.js";
describe("NotDefined Server Endpoint Client", () => {
  let client: NotDefinedClient;

  beforeEach(() => {
    client = new NotDefinedClient("http://localhost:3000", {
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should work with not defined endpoint", async () => {
    try {
      const result = await client.valid();
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
