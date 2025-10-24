import { assert } from "chai";
import { HeaderClient } from "./generated/azure/client-generator-core/api-version/header/src/index.js";

describe("Azure Alternate ApiVersion Header Modular Client", () => {
  let client: HeaderClient;

  beforeEach(() => {
    client = new HeaderClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should send api version as header", async () => {
    const result = await client.headerApiVersion("2025-01-01");
    assert.isUndefined(result);
  });
});
