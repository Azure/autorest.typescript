import { BasicClient } from "./generated/azure/core/src/index.js";
import { assert } from "chai";

describe("BasicClient Classical Client", () => {
  let client: BasicClient;

  beforeEach(() => {
    client = new BasicClient({
      allowInsecureConnection: true
    });
  });

  it("should create the client", async () => {
    assert.isNotNull(client);
  });
});
