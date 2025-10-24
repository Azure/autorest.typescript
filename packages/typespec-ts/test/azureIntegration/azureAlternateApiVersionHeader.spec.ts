import { assert } from "chai";
import ApiVersionHeaderClientFactory, {
  ApiVersionHeaderClient
} from "./generated/azure/client-generator-core/api-version/header/src/index.js";

describe("Azure Alternate ApiVersion Header Client", () => {
  let client: ApiVersionHeaderClient;

  beforeEach(() => {
    client = ApiVersionHeaderClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should send api version as header", async () => {
    const result = await client
      .path("/azure/client-generator-core/api-version/header")
      .post({
        headers: {
          "x-ms-version": "2025-01-01"
        }
      });
    assert.strictEqual(result.status, "200");
  });
});
